<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" parallax-active="false">
      <div class="md-layout">
        <div class="md-layout-item md-size-100 md-small-size-100 mx-auto">
          <md-card class="md-card md-card-signup">
            <md-card-content style="padding: 0 15%">
              <div class="md-layout">
                <div class="md-layout-item md-size-25 md-small-size-100">
                  <md-card class="md-card md-card-refine md-card-plain">
                    <md-card-content>
                      <h3 class="card-title">Apply Filters</h3>
                      <collapse
                        :active-tab="1"
                        :collapse="['Status']"
                        icon="keyboard_arrow_down"
                        color-collapse="rose"
                      >
                        <template slot="md-collapse-pane-1">
                          <md-checkbox v-model="filterStatus.Bids" class="mb-0">
                            Bids
                          </md-checkbox>
                          <md-checkbox
                            v-model="filterStatus.Likes"
                            class="mb-0"
                          >
                            Likes
                          </md-checkbox>
                          <md-checkbox
                            v-model="filterStatus.Purchases"
                            class="mb-0"
                          >
                            Purchases
                          </md-checkbox>
                          <md-checkbox
                            v-model="filterStatus.Listing"
                            class="mb-0"
                          >
                            Listing
                          </md-checkbox>
                          <md-checkbox
                            v-model="filterStatus.Followings"
                            class="mb-0"
                          >
                            Followings
                          </md-checkbox>
                        </template>
                      </collapse>
                    </md-card-content>
                  </md-card>
                </div>
                <div class="md-layout-item md-size-75 md-small-size-100">
                  <md-card class="md-card md-card-refine md-card-plain">
                    <md-card-content>
                      <h3 class="card-title">Activity</h3>

                      <tabs
                        :tab-active="1"
                        :tab-name="['All', 'My Activity']"
                        plain
                        color-button="success"
                      >
                        <!-- here you can add your content for tab-content -->
                        <template slot="tab-pane-1">
                          <activity-card
                            v-for="(item, i) in listItems"
                            :key="i"
                            flex-direction-row
                            card-avatar
                            card-plain
                            :shadow-normal="false"
                            :no-colored-shadow="true"
                            :card-image="item.image"
                          >
                            <template slot="cardContent">
                              <h4 class="card-title">{{ item.name }}</h4>
                              <p class="card-title">{{ item.description }}</p>
                              <p class="description">{{ item.created_at }}</p>
                            </template>
                            <template slot="cardAction">
                              <md-button class="md-round"> Follow </md-button>
                            </template>
                          </activity-card>
                        </template>
                        <template slot="tab-pane-2">
                          <md-table v-model="listItems" class="table-shopping">
                            <md-table-row
                              slot="md-table-row"
                              slot-scope="{ item }"
                            >
                              <md-table-cell md-label="">
                                <div class="img-container">
                                  <img :src="item.image" alt="products" />
                                </div>
                              </md-table-cell>
                              <md-table-cell md-label="Item" class="td-name">
                                <a href="javascript:void(0)">{{ item.name }}</a>
                                <br />
                                <small>{{ item.category_id }}</small>
                              </md-table-cell>

                              <md-table-cell md-label="Creator">
                                {{ item.creator }}
                              </md-table-cell>
                              <md-table-cell md-label="Quantity">
                                {{ item.total_quantity }}
                              </md-table-cell>
                            </md-table-row>
                          </md-table>
                        </template>
                      </tabs>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
            </md-card-content>
          </md-card>
        </div>
      </div>
    </parallax>
  </div>
</template>

<script>
import Mixins from "@/plugins/basicMixins";
import { Collapse, Tabs, ActivityCard } from "@/components";

export default {
  components: {
    Collapse,
    Tabs,
    ActivityCard,
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "signup-page",

  async mounted() {
    this.$loading(true);
    try {
      this.listItems = await this.$store.dispatch("item/getAllItems", {
        skip: Math.floor(Math.random() * 100),
      });
    } catch (error) {
      this.$failAlert({
        text: error,
      });
    }
    if (!this.listItems) {
      this.$failAlert({
        text: "Your Activity is empty",
      });
    }
    this.$loading(false);
  },
  data() {
    return {
      sliders: {
        rangeSlider: [101, 700],
      },

      subscribe: null,
      listItems: [],
      designer: {
        all: true,
        polo: false,
        wooyoungmi: false,
        alexander: false,
        tom: false,
        ami: false,
        berena: false,
        sweeney: false,
        burberry: false,
        calvin: false,
        kingsman: false,
        monaco: false,
        dolce: false,
        gucci: false,
        biglioli: false,
        lanvin: false,
        piana: false,
        massimo: false,
      },
      filterStatus: {
        Bids: false,
        Likes: false,
        Purchases: false,
        Listing: false,
        Followings: false,
      },
      image: require("@/assets/img/examples/clark-street-merc.jpg"),
      image2: require("@/assets/img/examples/ecommerce-header.jpg"),
      productCard: {
        productCard2: require("@/assets/img/examples/dolce.jpg"),
        productCard3: require("@/assets/img/examples/tom-ford.jpg"),
      },
      clothing: {
        blazers: true,
        casualShirts: false,
        formalShirts: false,
        jeans: false,
        polos: false,
        pyjamas: false,
        shorts: false,
        trousers: false,
      },
    };
  },
  methods: {
    newValue(e) {
      this.sliders.rangeSlider[0] = e[0];
      this.sliders.rangeSlider[1] = e[1];
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 10vh !important;
}
.img {
  max-width: 200px;
  padding-bottom: 30%;
}
</style>
