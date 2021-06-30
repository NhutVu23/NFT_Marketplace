<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter header-small"
      parallax-active="false"
      :style="headerStyle"
    >
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-80 md-medium-size-100 ml-auto mr-auto text-center"
          >
            <h1 class="title">Top NFTs</h1>
            <h4 class="title">
              Volume, average, price and other statistics for top NFTs, updated
              hourly.
            </h4>

            <div class="md-layout text-center mt-2">
              <div class="md-layout-item">
                <md-button
                  v-for="(item, i) in listCategory"
                  :key="i"
                  href="javascript:void(0)"
                  class="md-theme-default md-behance md-round"
                >
                  {{ item.name }}
                </md-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section pb-0 pt-0">
        <div class="container">
          <md-card class="md-card-plain">
            <md-card-content>
              <md-table v-model="listItems" class="table-shopping">
                <md-table-row slot="md-table-row" slot-scope="{ item }">
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
                  <!-- <md-table-cell md-label="Price" class="td-number">
                    <small>€</small>
                    {{ item.price }}
                  </md-table-cell> -->
                  <!-- <md-table-cell
                    md-label="Qty"
                    class="td-number"
                  >
                    {{ item.qty }}
                    <div class="md-group">
                      <md-button
                        class="md-round md-info md-sm"
                        @click="increaseQuantity(item)"
                      >
                        <md-icon>add</md-icon>
                      </md-button>
                      <md-button
                        class="md-round md-info md-sm"
                        @click="decreaseQuantity(item)"
                      >
                        <md-icon>remove</md-icon>
                      </md-button>
                    </div>
                  </md-table-cell>
                   -->
                  <!-- <md-table-cell md-label="Amount" class="td-number">
                    <small>€</small>
                    {{ item.amount }}
                  </md-table-cell> -->
                  <md-table-cell>
                    <md-button
                      @click="goToProduct(item._id)"
                      class="md-success md-round"
                    >
                      <md-icon>description</md-icon>
                      View Detail
                    </md-button>
                  </md-table-cell>
                </md-table-row>
              </md-table>
              <!-- <div class="table table-stats">
                <div class="td-price">
                  <div class="td-total">
                    Total
                  </div>
                  <span>
                    <small>€</small>
                    {{ shoppingTotal }}
                  </span>
                </div>
                <div class="text-right">
                  <md-button class="md-info md-round">
                    Complete Purchase
                    <md-icon>keyboard_arrow_right</md-icon>
                  </md-button>
                </div>
              </div> -->
            </md-card-content>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixins from "@/plugins/basicMixins";

export default {
  mixins: [Mixins.ShoppingCart, Mixins.HeaderImage],
  computed: {
    listCategory() {
      return this.$store.state.category.categories;
    },
  },
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
    this.$loading(false);
  },
  data() {
    return {
      image: require("@/assets/img/examples/bg2.jpg"),
      listItems: [],
    };
  },
  methods: {
    goToProduct(itemId) {
      this.$router.push("/asset/" + itemId);
    },
  },
};
</script>

<style lang="scss" scoped>
// .md-round {
//   border: 1px solid gray;
//   color: #3c4858 !important;
// }
</style>
