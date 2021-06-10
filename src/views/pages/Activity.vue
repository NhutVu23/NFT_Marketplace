<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" parallax-active="false">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-100 md-small-size-100 mx-auto text-center"
          >
            <md-card class="md-card md-card-signup">
              <md-card-content>
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 md-small-size-100">
                    <md-card class="md-card md-card-refine md-card-plain">
                      <md-card-content>
                        <h2 class="card-title">Apply Filters</h2>
                        <collapse
                          :active-tab="1"
                          :collapse="['Status']"
                          icon="keyboard_arrow_down"
                          color-collapse="rose"
                        >
                          <template slot="md-collapse-pane-1">
                            <md-checkbox
                              v-model="filterStatus.Bids"
                              class="mb-0"
                            >
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
                        <h2
                          style="place-content: center"
                          class="text-center card-title"
                        >
                          Activity
                        </h2>
                        <md-table
                          v-model="shoppingCartTable"
                          class="table-shopping"
                        >
                          <md-table-row
                            slot="md-table-row"
                            slot-scope="{ item }"
                          >
                            <md-table-cell md-label="">
                              <div class="img-container">
                                <img :src="item.image" alt="products" />
                              </div>
                            </md-table-cell>
                            <md-table-cell md-label="Product" class="td-name">
                              <a href="javascript:void(0)">{{
                                item.product
                              }}</a>
                              <br />
                              <small>{{ item.category }}</small>
                            </md-table-cell>
                            <md-table-cell md-label="Color">
                              {{ item.color }}
                            </md-table-cell>
                            <md-table-cell md-label="Size">
                              {{ item.size }}
                            </md-table-cell>
                            <md-table-cell md-label="Price" class="td-number">
                              <small>€</small>
                              {{ item.price }}
                            </md-table-cell>
                            <md-table-cell md-label="Amount" class="td-number">
                              <small>€</small>
                              {{ item.amount }}
                            </md-table-cell>
                          </md-table-row>
                        </md-table>
                      </md-card-content>
                    </md-card>
                  </div>
                </div>
              </md-card-content>
            </md-card>
          </div>
        </div>
      </div>
    </parallax>
  </div>
</template>

<script>
import Mixins from "@/plugins/basicMixins";
import { Collapse } from "@/components";

export default {
  components: {
    Collapse,
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "signup-page",
  data() {
    return {
      sliders: {
        rangeSlider: [101, 700],
      },

      subscribe: null,
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
        productCard1: require("@/assets/img/examples/gucci.jpg"),
        productCard2: require("@/assets/img/examples/dolce.jpg"),
        productCard3: require("@/assets/img/examples/tom-ford.jpg"),
        productCard4: require("@/assets/img/examples/suit-1.jpg"),
        productCard5: require("@/assets/img/examples/suit-2.jpg"),
        productCard6: require("@/assets/img/examples/suit-3.jpg"),
        productCard7: require("@/assets/img/examples/suit-4.jpg"),
        productCard8: require("@/assets/img/examples/suit-5.jpg"),
        productCard9: require("@/assets/img/examples/suit-6.jpg"),
      },
      cardBg: {
        cardBg1: require("@/assets/img/examples/color1.jpg"),
        cardBg2: require("@/assets/img/examples/color3.jpg"),
        cardBg3: require("@/assets/img/examples/color2.jpg"),
        cardBg4: require("@/assets/img/dg3.jpg"),
        cardBg5: require("@/assets/img/dg1.jpg"),
      },
      cardBlog: {
        cardBlog1: require("@/assets/img/dg6.jpg"),
        cardBlog2: require("@/assets/img/dg10.jpg"),
        cardBlog3: require("@/assets/img/dg9.jpg"),
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

      shoppingCartTable: [
        {
          image: require("@/assets/img/product1.jpg"),
          product: "Spring Jacket",
          category: "by Dolce&Gabbana",
          color: "Red",
          size: "M",
          price: 549,
          qty: 1,
          amount: 549,
        },
        {
          image: require("@/assets/img/product2.jpg"),
          product: "Short Pants",
          category: "by Gucci",
          color: "Purple",
          size: "M",
          price: 499,
          qty: 2,
          amount: 998,
        },
        {
          image: require("@/assets/img/product3.jpg"),
          product: "Pencil Skirt",
          category: "by Valentino",
          color: "Red",
          size: "M",
          price: 799,
          qty: 1,
          amount: 799,
        },
      ],
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
</style>
