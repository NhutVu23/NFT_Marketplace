<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter header-small"
      parallax-active="true"
      filter-color="rose"
      :style="headerStyle"
    >
      <div class="container">
        <div class="md-layout title-row">
          <div
            class="md-layout-item md-size-33 md-small-size-100 ml-auto text-right"
          >
            <md-button class="md-white">
              <md-icon>shopping_cart</md-icon> 0 Items
            </md-button>
          </div>
        </div>
      </div>
    </parallax>
    <div class="section">
      <div class="container">
        <div class="main main-raised">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <!-- <ProductZoomer
                :base-images="images"
                :base-zoomer-options="zoomerOptions"
              /> -->
              <img
                src="@/assets/img/examples/card-product1.jpg"
                alt="Rounded Image"
                class="rounded"
              />
              <div
                class="colored-shadow"
                :style="shadowImageBlog(productCard.productCard2)"
              />
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h2 class="title">Becky Silk Blazer</h2>
              <h3 class="main-price">$335</h3>
              <collapse
                :active-tab="1"
                :collapse="[
                  'Description',
                  'Designer Information',
                  'Details and Care',
                ]"
                icon="keyboard_arrow_down"
                color-collapse="rose"
              >
                <template slot="md-collapse-pane-1">
                  <p>
                    Eres' daring 'Grigri Fortune' swimsuit has the fit and
                    coverage of a bikini in a one-piece silhouette. This fuchsia
                    style is crafted from the label's sculpting peau douce
                    fabric and has flattering cutouts through the torso and
                    back. Wear yours with mirrored sunglasses on vacation.
                  </p>
                </template>
                <template slot="md-collapse-pane-2">
                  <p>
                    An infusion of West Coast cool and New York attitude,
                    Rebecca Minkoff is synonymous with It girl style. Minkoff
                    burst on the fashion scene with her best-selling 'Morning
                    After Bag' and later expanded her offering with the Rebecca
                    Minkoff Collection - a range of luxe city staples with a
                    "downtown romantic" theme.
                  </p>
                </template>
                <template slot="md-collapse-pane-3">
                  <ul>
                    <li>Storm and midnight-blue stretch cotton-blend</li>
                    <li>
                      Notch lapels, functioning buttoned cuffs, two front flap
                      pockets, single vent, internal pocket
                    </li>
                    <li>Two button fastening</li>
                    <li>84% cotton, 14% nylon, 2% elastane</li>
                    <li>Dry clean</li>
                  </ul>
                </template>
              </collapse>
              <div class="text-right">
                <md-button class="md-rose md-round">
                  Buy Now 
                  <!-- <md-icon>shopping_cart</md-icon> -->
                </md-button>
              </div>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h3 class="title">Details</h3>
              <div class="table-shopping">
                <div class="row-detail">
                  <span class="row-left">Contract Address</span>
                  <span class="row-right">0x495f...7b5e</span>
                </div>
                <div class="row-detail">
                  <span class="row-left">Token ID</span>
                  <span class="row-right">9870243454359818...</span>
                </div>
                <div class="row-detail">
                  <span class="row-left">Metadata</span>
                  <span class="row-right"
                    >QmdjprxfWFsJcgowFyaeyHefaQ2d9mkxm5CDPD1MJ4jQ25...</span
                  >
                </div>
                <div class="row-detail">
                  <span class="row-left">img_back</span>
                  <span class="row-right"
                    >QmZuYTpoSMsH749Ln5GL43NQYbfJ2ehpMbkEsFVysis9gd...</span
                  >
                </div>
                <div class="row-detail">\
                  <span class="row-left">Created</span>
                  <span class="row-right">March 25, 2021 | 05:05:21</span>
                </div>
              </div>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h3 class="title">Trading History</h3>
              <md-table v-model="tableData" class="table-shopping">
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="#">
                    {{ item.id }}
                  </md-table-cell>
                  <md-table-cell md-label="Name">
                    {{ item.name }}
                  </md-table-cell>
                  <md-table-cell md-label="Country">
                    {{ item.country }}
                  </md-table-cell>
                  <md-table-cell md-label="City">
                    {{ item.city }}
                  </md-table-cell>
                  <md-table-cell md-label="Salary">
                    {{ item.salary }}
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h3 class="title">Owners</h3>
              <md-table v-model="tableData" class="table-shopping">
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="#">
                    {{ item.id }}
                  </md-table-cell>
                  <md-table-cell md-label="Name">
                    {{ item.name }}
                  </md-table-cell>
                  <md-table-cell md-label="Country">
                    {{ item.country }}
                  </md-table-cell>
                  <md-table-cell md-label="City">
                    {{ item.city }}
                  </md-table-cell>
                  <md-table-cell md-label="Salary">
                    {{ item.salary }}
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h3 class="title">Offers</h3>
              <md-table v-model="tableData" class="table-shopping">
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="#">
                    {{ item.id }}
                  </md-table-cell>
                  <md-table-cell md-label="Name">
                    {{ item.name }}
                  </md-table-cell>
                  <md-table-cell md-label="Country">
                    {{ item.country }}
                  </md-table-cell>
                  <md-table-cell md-label="City">
                    {{ item.city }}
                  </md-table-cell>
                  <md-table-cell md-label="Salary">
                    {{ item.salary }}
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>

            <div class="md-layout-item md-size-100 md-small-size-100">
              <h3 class="title">Price History</h3>
              <div class="table-shopping">
                <vue-frappe
                  id="test"
                  :labels="[
                    '12am-3am',
                    '3am-6am',
                    '6am-9am',
                    '9am-12pm',
                    '12pm-3pm',
                    '3pm-6pm',
                    '6pm-9pm',
                    '9pm-12am',
                  ]"
                  title=""
                  type="axis-mixed"
                  :height="400"
                  :colors="['purple', '#ffa3ef', 'light-blue']"
                  :dataSets="this.data"
                >
                </vue-frappe>
              </div>
            </div>
          </div>
        </div>

        <div class="related-products">
          <h3 class="title">More From This Collection</h3>
          <div class="md-layout">
            <div
              class="md-layout-item md-size-50 md-small-size-100 md-large-size-25 md-xlarge-size-25"
            >
              <product-card
                text-center
                class="mt-3"
                :card-image="productCard.productCard1"
                :shadow-normal="false"
                :no-colored-shadow="false"
              >
                <template slot="cardContent">
                  <h6 class="card-category text-rose">Trending</h6>
                  <h4 class="card-title">Dolce & Gabbana</h4>
                  <p class="card-description">
                    Dolce & Gabbana's 'Greta' tote has been crafted in Italy
                    from hard-wearing red textured-leather.
                  </p>
                </template>
                <template slot="cardAction">
                  <div class="price-container">
                    <span class="price"> €1,459</span>
                  </div>
                  <div class="stats ml-auto">
                    <md-button class="md-just-icon md-rose md-round md-simple">
                      <md-icon>favorite</md-icon>
                      <md-tooltip md-direction="top">
                        Save to Wishlist
                      </md-tooltip>
                    </md-button>
                  </div>
                </template>
              </product-card>
            </div>
            <div
              class="md-layout-item md-size-50 md-small-size-100 md-large-size-25 md-xlarge-size-25"
            >
              <product-card
                text-center
                class="mt-3"
                :card-image="productCard.productCard2"
                :shadow-normal="false"
                :no-colored-shadow="false"
              >
                <template slot="cardContent">
                  <h6 class="card-category text-muted">Popular</h6>
                  <h4 class="card-title">Balmain</h4>
                  <p class="card-description">
                    Balmain's mid-rise skinny jeans are cut with stretch to
                    ensure they retain their second-skin fit but move
                    comfortably.
                  </p>
                </template>
                <template slot="cardAction">
                  <div class="price-container">
                    <span class="price"> €459</span>
                  </div>
                  <div class="stats ml-auto">
                    <md-button class="md-just-icon md-round md-simple">
                      <md-icon>favorite</md-icon>
                      <md-tooltip md-direction="top">
                        Save to Wishlist
                      </md-tooltip>
                    </md-button>
                  </div>
                </template>
              </product-card>
            </div>
            <div
              class="md-layout-item md-size-50 md-small-size-100 md-large-size-25 md-xlarge-size-25"
            >
              <product-card
                text-center
                class="mt-3"
                :card-image="productCard.productCard3"
                :shadow-normal="false"
                :no-colored-shadow="false"
              >
                <template slot="cardContent">
                  <h6 class="card-category text-muted">Popular</h6>
                  <h4 class="card-title">Balenciaga</h4>
                  <p class="card-description">
                    Balenciaga's black textured-leather wallet is finished with
                    the label's iconic 'Giant' studs. This is where you can...
                  </p>
                </template>
                <template slot="cardAction">
                  <div class="price-container">
                    <span class="price"> €590</span>
                  </div>
                  <div class="stats ml-auto">
                    <md-button class="md-just-icon md-rose md-round md-simple">
                      <md-icon>favorite</md-icon>
                      <md-tooltip md-direction="top">
                        Save to Wishlist
                      </md-tooltip>
                    </md-button>
                  </div>
                </template>
              </product-card>
            </div>
            <div
              class="md-layout-item md-size-50 md-small-size-100 md-large-size-25 md-xlarge-size-25"
            >
              <product-card
                text-center
                class="mt-3"
                :card-image="productCard.productCard4"
                :shadow-normal="false"
                :no-colored-shadow="false"
              >
                <template slot="cardContent">
                  <h6 class="card-category text-rose">Popular</h6>
                  <h4 class="card-title">Dolce & Gabbana</h4>
                  <p class="card-description">
                    Dolce & Gabbana's 'Greta' tote has been crafted in Italy
                    from hard-wearing red textured-leather.
                  </p>
                </template>
                <template slot="cardAction">
                  <div class="price-container">
                    <span class="price"> €1,459</span>
                  </div>
                  <div class="stats ml-auto">
                    <md-button class="md-just-icon md-round md-simple">
                      <md-icon>favorite</md-icon>
                      <md-tooltip md-direction="top">
                        Save to Wishlist
                      </md-tooltip>
                    </md-button>
                  </div>
                </template>
              </product-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Collapse, ProductCard } from "@/components";
import Mixins from "@/plugins/basicMixins";

export default {
  components: {
    Collapse,
    ProductCard,
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "product-page",
  data() {
    return {
      selectColor: "rose",
      selectSize: "small",
      image: require("@/assets/img/examples/bg-product.jpg"),
      productCard: {
        productCard1: require("@/assets/img/examples/card-product1.jpg"),
        productCard2: require("@/assets/img/examples/card-product3.jpg"),
        productCard3: require("@/assets/img/examples/card-product4.jpg"),
        productCard4: require("@/assets/img/examples/card-product2.jpg"),
      },
      tableData: [
        {
          id: 1,
          name: "Dakota Rice",
          salary: "$36.738",
          country: "Niger",
          city: "Oud-Turnhout",
          icon1: "person",
          icon2: "edit",
          icon3: "close",
        },
        {
          id: 2,
          name: "Minerva Hooper",
          salary: "$23,789",
          country: "Curaçao",
          city: "Sinaai-Waas",
          icon1: "person",
          icon2: "edit",
          icon3: "close",
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands",
          city: "Baileux",
          icon1: "person",
          icon2: "edit",
          icon3: "close",
        },
        {
          id: 4,
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Overland Park",
          icon1: "person",
          icon2: "edit",
          icon3: "close",
        },
        {
          id: 5,
          name: "Doris Greene",
          salary: "$63,542",
          country: "Malawi",
          city: "Feldkirchen in Kärnten",
          icon1: "person",
          icon2: "edit",
          icon3: "close",
        },
      ],
      data: [
        {
          name: "Some Data",
          chartType: "bar",
          values: [25, 40, 30, 35, 8, 52, 17, -4],
        },
        {
          name: "Another Set",
          chartType: "bar",
          values: [25, 50, -10, 15, 18, 32, 27, 14],
        },
        {
          name: "Yet Another",
          chartType: "line",
          values: [15, 20, -3, -15, 58, 12, -17, 37],
        },
      ],
    };
  },
  methods: {
    shadowImageBlog(image) {
      return {
        backgroundImage: `url(${image})`,
        opacity: 1,
      };
    },
  },
};
</script>
<style scoped>
.table-shopping {
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
}
.row-detail {
  width: 100%;
  display: flow-root;
  padding: 15px;
}
.row-left {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
}
.row-right {
  float: right;
  font-weight: 500;
  font-size: 14px;
  color: gray;
  width: 300px;
  word-wrap: break-word;
}
</style>
