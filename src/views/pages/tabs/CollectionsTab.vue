<template>
  <div class="container">
    <div class="md-layout">
      <div class="md-layout-item md-size-100 md-small-size-100">
        <div v-if="listItems && listItems.length > 0" class="md-layout">
          <div
            v-for="(item, i) in listItems"
            :key="i"
            class="md-layout-item md-size-25 md-small-size-100"
          >
            <full-bg-card
              :card-image="item.image"
              @click.native="viewCollection(item._id)"
            >
              <template slot="cardContent">
                <!-- <h6 class="card-category text-info">
                    Worlds
                  </h6> -->
                <a href="javascript:void(0)">
                  <h3 class="card-title">{{ item.name }}</h3>
                </a>
                <p class="card-description">
                  {{ item.description }}
                </p>
              </template>
            </full-bg-card>
          </div>
        </div>
      </div>
      <div
        v-if="isShowMore"
        class="md-layout-item md-size-10 md-small-size-100 mx-auto"
      >
        <md-button @click="loadNextItems" class="md-rose md-round">
          Show More
        </md-button>
      </div>
    </div>
  </div>
</template>

<script>
import Mixins from "@/plugins/basicMixins";
import FullBgCard from "../../../components/cards/FullBgCard.vue";

export default {
  components: { FullBgCard },
  props: { walletAddress: String },
  computed: {
    userData() {
      return this.$store.state.user?.information;
    },
  },
  watch: {
    async walletAddress(newValue, oldValue) {
      console.log("walletAddress");
      console.log(newValue);
      if (newValue) {
        this.loadFirst(newValue);
      } else {
        this.profileName = null;
        this.filterData.wallet_address = null;
        this.listItems = [];
      }
    },
  },
  async mounted() {
    if (this.walletAddress) {
      this.loadFirst(this.walletAddress);
    }
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "profile-page",
  data() {
    return {
      listItems: [],
      filterData: {
        skip: 0,
        limit: 20,
      },
      isShowMore: true,
      profileName: "",
      image: require("@/assets/img/city-profile.jpg"),
      img: require("@/assets/img/faces/christian.jpg"),
    };
  },
  methods: {
    async loadNextItems() {
      try {
        let newData = await this.$store.dispatch(
          "collection/getCollectionForUser",
          this.filterData
        );

        if (newData && newData.length > 0) {
          if (newData.length == this.filterData.limit) {
            this.filterData.skip += newData.length;
          } else {
            this.isShowMore = false;
          }
          this.listItems.push.apply(this.listItems, newData);
        }
      } catch (error) {}
    },
    viewCollection(collectionId) {
      this.$router.push(`/collection/${collectionId}`);
    },
    async loadFirst(newValue) {
      this.$loading(true);
      try {
        this.profileName = newValue;
        this.filterData.skip = 0;
        this.filterData.limit = 20;
        this.filterData.wallet_address = newValue;
        this.listItems = await this.$store.dispatch(
          "collection/getCollectionForUser",
          this.filterData
        );

        if (this.listItems.length != this.filterData.limit) {
          this.isShowMore = false;
        }
      } catch (error) {
        this.$failAlert({
          text: error,
        });
      }
      this.$loading(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile {
  text-align: left;
  .name {
    margin-top: -80px;
  }
  .md-card-profile,
  .md-card-testimonial {
    margin-top: 0px;
    padding: 0px;
    text-align: left;
    border: transparent;
  }
}

.profile-tabs::v-deep {
  margin-top: -10%;
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img:not(.img) {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
