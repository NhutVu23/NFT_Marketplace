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
            <aution-card
              text-center
              class="mt-3"
              card-plain
              :item-id="item._id"
              :card-image="item.image"
              :shadow-normal="false"
              :no-colored-shadow="false"
            >
              <template slot="cardContent">
                <h4 class="card-title">{{ item.name }}</h4>
              </template>
              <template slot="cardAction">
                <div class="price-container">Price</div>
                <div class="ml-auto price-container">
                  <md-button class="md-success">
                    {{ item.minBid || 0 }} ETH
                  </md-button>
                </div>
              </template>
            </aution-card>
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
import AutionCard from "../../../components/cards/AutionCard.vue";

export default {
  components: { AutionCard },
  props: { walletAddress: String },
  computed: {
    userData() {
      return this.$store.state.user?.information;
    },
  },
  watch: {
    async walletAddress(newValue, oldValue) {
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
          "item/getItemCreated",
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
    async loadFirst(newValue) {
      this.$loading(true);
      try {
        this.profileName = newValue;
        this.filterData.skip = 0;
        this.filterData.limit = 20;
        this.filterData.wallet_address = newValue;
        this.listItems = await this.$store.dispatch(
          "item/getItemCreated",
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
