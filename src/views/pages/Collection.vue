<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      parallax-active="true"
      :style="headerStyle"
    />
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-80 md-small-size-100 mx-auto">
              <div class="collection">
                <div class="avatar">
                  <img
                    :src="collection.image"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">{{ collection.name }}</h3>
                </div>
                <div class="follow">
                  <md-button class="md-success md-just-icon md-round">
                    <md-icon>add</md-icon>
                    <md-tooltip md-direction="top">
                      Follow this user
                    </md-tooltip>
                  </md-button>

                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-dribbble"
                  >
                    <i class="fab fa-dribbble" />
                  </md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-twitter"
                  >
                    <i class="fab fa-twitter" />
                  </md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-pinterest"
                  >
                    <i class="fab fa-pinterest" />
                  </md-button>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <h6>{{ collection.description }}</h6>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-active="1"
              :tab-name="['Recently Listed', 'Live Auctions']"
              :tab-icon="['palette', 'camera']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <div class="md-layout">
                  <div class="md-layout-item md-size-100 md-small-size-100">
                    <div
                      v-if="listItems && listItems.length > 0"
                      class="md-layout"
                    >
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
                  <!-- <div
                    v-if="isShowMore"
                    class="md-layout-item md-size-10 md-small-size-100 mx-auto"
                  >
                    <md-button @click="loadNextItems" class="md-rose md-round">
                      Show More
                    </md-button>
                  </div> -->
                </div>
              </template>
              <template slot="tab-pane-2">
                <div class="md-layout">
                  <div class="md-layout-item md-size-100 md-small-size-100">
                    <div
                      v-if="listItems && listItems.length > 0"
                      class="md-layout"
                    >
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
                  <!-- <div
                    v-if="isShowMore"
                    class="md-layout-item md-size-10 md-small-size-100 mx-auto"
                  >
                    <md-button @click="loadNextItems" class="md-rose md-round">
                      Show More
                    </md-button>
                  </div> -->
                </div>
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
import Mixins from "@/plugins/basicMixins";
import AutionCard from "../../components/cards/AutionCard.vue";

export default {
  components: {
    Tabs,
    AutionCard,
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "profile-page",
  computed: {
    collectionId() {
      return this.$route.params.id;
    },
    userData() {
      return this.$store.state.user?.information;
    },
  },

  async mounted() {
    this.$loading(true);
    try {
      this.collection = await this.getItem();
    } catch (error) {
      this.$loading(false);
      this.$failAlert({
        text: error,
      });
      this.$router.go(-1);
    }

    this.image = this.collection?.banner_img;
    if (this.collection.items) {
      this.listItems = this.collection.items;
    }

    this.$loading(false);
  },
  data() {
    return {
      collection: {},
      listItems: [],
      filterData: {
        skip: 0,
        limit: 20,
      },
      image: require("@/assets/img/city-profile.jpg"),
      img: require("@/assets/img/faces/christian.jpg"),
    };
  },
  methods: {
    getItem() {
      return this.$store.dispatch("collection/getDetailCollection", {
        id: this.collectionId,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs::v-deep {
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
