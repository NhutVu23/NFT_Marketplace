<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter header-small"
      parallax-active="false"
    >
    </parallax>
    <div class="main main-raised" style="padding: 0 12%">
      <md-button
        class="md-simple md-github back-button"
        @click="$router.go(-1)"
      >
        <i class="fas fa-arrow-left"></i>
        <h4>Go Back</h4>
      </md-button>
      <div v-if="item" class="md-layout">
        <div
          class="md-layout-item md-size-50 md-small-size-100 mx-auto text-center"
        >
          <div v-lazy-container="{ selector: 'img' }">
            <img
              class="product-img"
              :data-src="item.image"
              :data-loading="loadimage"
            />
          </div>
          <div class="colored-shadow" :style="shadowImageBlog(item.image)" />
        </div>
        <div class="md-layout-item md-size-50 md-small-size-100">
          <h2 class="title">{{ item.name }}</h2>
          <h5>Not for sale - 1 of {{ item.total_quantity }}</h5>
          <div class="md-layout" style="margin-left: 0px">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <p>Creator</p>
              <div class="comment">
                <a class="float-left" :href="`/user-profile/${item.creator}`">
                  <div class="small-avatar">
                    <div v-lazy-container="{ selector: 'img' }">
                      <img :data-src="item.image" :data-loading="loadimage" />
                    </div>
                  </div>
                </a>
                <div class="comment-body">
                  <a :href="`#/user-profile/${item.creator}`">
                    <p class="show-name">{{ showShortName(item.creator) }}</p>
                  </a>
                </div>
              </div>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <p>Collection</p>
              <div class="comment">
                <a
                  class="float-left"
                  :href="`#/collection/${item.collection_id}`"
                >
                  <div class="small-avatar">
                    <div v-lazy-container="{ selector: 'img' }">
                      <img
                        :data-src="item.collection[0].image || item.image"
                        :data-loading="loadimage"
                      />
                    </div>
                  </div>
                </a>
                <div class="comment-body show-name">
                  <a
                    class="show-name"
                    :href="`#/collection/${item.collection_id}`"
                    >{{ item.collection[0].name || item.collection_id }}</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="box-price">
            <h4>Price</h4>
            <h3 class="main-price">
              {{ item.minBid || 0 }} ETH
              <small> - ($ {{ convertToUSD(item.minBid) }})</small>
            </h3>
            <md-button
              v-if="item.owner == metaMaskAddress && !item.sellOrder"
              class="md-behance md-round"
              @click="sellItem"
            >
              <md-icon>unarchive</md-icon>
              Sell
            </md-button>
            <md-button
              v-else-if="item.owner == metaMaskAddress && item.sellOrder"
              class="md-behance md-round"
              @click="editItem"
            >
              <md-icon>unarchive</md-icon>
              Edit Item
            </md-button>
            <md-button
              v-else-if="item.isPutOnMarket"
              class="md-behance md-round"
              @click="buyItem"
            >
              <md-icon>shopping_cart</md-icon>
              Buy Now
            </md-button>
            <!-- <md-button v-else class="md-behance md-round">
              <md-icon>assignment</md-icon>
              Place a bid
            </md-button> -->
          </div>
          <collapse
            :active-tab="1"
            :collapse="['Description', 'Details', `Owners ( ${item.owner} )`]"
            icon="keyboard_arrow_down"
            color-collapse="rose"
          >
            <template slot="md-collapse-pane-1">
              <p>
                {{ item.description }}
              </p>
            </template>
            <template slot="md-collapse-pane-2">
              <div>
                <div class="row-detail">
                  <span class="row-left">Contract Address</span>
                  <span class="row-right">{{ item._id }}</span>
                </div>
                <div class="row-detail">
                  <span class="row-left">Token ID</span>
                  <span class="row-right">{{ item.token_id }}</span>
                </div>
                <div class="row-detail">
                  <span class="row-left">Metadata</span>
                  <span class="row-right">{{ item._id }}</span>
                </div>
                <div class="row-detail">
                  <span class="row-left">img_back</span>
                  <span class="row-right">{{ item.image }}</span>
                </div>
                <div class="row-detail">
                  <span class="row-left">Created</span>
                  <span class="row-right">{{ item.created_at }}</span>
                </div>
              </div>
            </template>
            <template slot="md-collapse-pane-3">
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
            </template>
          </collapse>
        </div>
        <div class="md-layout-item md-size-100 md-small-size-100">
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
        <div class="md-layout-item md-size-100 md-small-size-100">
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

      <h3 class="title">More From This Collection</h3>
      <el-carousel trigger="click" :interval="10000">
        <el-carousel-item v-for="(group, i) in carouselItems" :key="i">
          <div class="md-layout">
            <div
              v-for="(item, i) in group"
              :key="i"
              class="md-layout-item md-size-50 md-small-size-100 md-large-size-25 md-xlarge-size-25"
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
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import { Collapse } from "@/components";
import Mixins from "@/plugins/basicMixins";
import AutionCard from "../../components/cards/AutionCard.vue";
import Web3 from "web3";
import ExchangeV1 from "../../assets/abis/ExchangeV1.json";
import RaribleToken from "../../assets/abis/RaribleToken.json";
import { Web3Ultils } from "../../utils/Web3Ultils";

export default {
  components: {
    Collapse,
    AutionCard,
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "product-page",
  async mounted() {
    this.$loading(true);
    try {
      this.item = await this.getItem();
    } catch (error) {
      this.$loading(false);
      this.$failAlert({
        text: error,
      });
      this.$router.go(-1);
    }

    try {
      this.listItems = await this.$store.dispatch("item/getAllItems", {
        skip: Math.floor(Math.random() * 100),
        limit: 12,
      });
      for (let index = 0; index < this.listItems.length; index++) {
        let tmp = Math.floor(index / 4);
        if (this.carouselItems.length == tmp) {
          this.carouselItems.push([]);
        }
        this.carouselItems[tmp].push(this.listItems[index]);
      }
    } catch (error) {
      this.$failAlert({
        text: error,
      });
    }

    this.$loading(false);
  },
  computed: {
    itemId() {
      return this.$route.params.id;
    },
    ETHRate() {
      return this.$store.state.user.ETHRate;
    },
    userData() {
      return this.$store.state.user?.information;
    },
    metaMaskAddress() {
      return this.userData?.wallet_address;
    },
  },
  watch: {
    async itemId(newValue, oldValue) {
      if (newValue && newValue.length > 0) {
        this.item = await this.getItem();
      }
    },
  },
  data() {
    return {
      loadimage: require("@/assets/img/loading.gif"),
      item: null,
      carouselItems: [],
      listItems: [],
      selectColor: "rose",
      selectSize: "small",
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
    showShortName(name) {
      return (
        name.substring(0, 6) +
        "..." +
        name.substring(name.length - 8, name.length)
      );
    },
    shadowImageBlog(image) {
      return {
        backgroundImage: `url(${image})`,
        opacity: 1,
      };
    },
    getItem() {
      return this.$store.dispatch("item/getDetailItem", { id: this.itemId });
    },
    async sellItem() {
      await this.$store.dispatch("global/setLoadingTitle", "Sell Item");
      this.$loadingModal(true);

      try {
        const result = await this.$store.dispatch(
          "item/requestMintSignature",
          this.item.token_id
        );

        const isSellItem = await Web3Ultils.sellItem(
          result,
          this.item,
          this.metaMaskAddress
        );
        if (isSellItem) {
          this.$successAlert({
            text: "Sell Item Successfull",
          });
          this.$router.push("/user-profile");
        }
      } catch (error) {
        this.$failAlert({
          text: error,
        });
      }

      this.$loadingModal(false);
    },
    convertToUSD(value) {
      let eth = value || 0;
      return eth * this.ETHRate;
    },

    editItem() {
      this.$router.push("/editItem/" + this.itemId);
    },
    async buyItem() {
      await this.$store.dispatch("global/setLoadingTitle", "Buy Item");
      this.$loadingModal(true);
      try {
        const result = await this.$store.dispatch(
          "item/requestBuyAsset",
          this.item.token_id
        );

        const isBuyItem = await Web3Ultils.buyAsset(
          result,
          this.item,
          this.metaMaskAddress
        );

        if (isBuyItem) {
          this.$successAlert({
            text: "Buy Item Successfull",
          });
          this.$router.push("/user-profile");
        }
      } catch (error) {
        this.$failAlert({
          text: error,
        });
      }

      this.$loadingModal(false);
    },
  },
};
</script>
<style scoped>
p {
  margin: 0px;
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
.box-price {
  background: rgba(45, 129, 255, 0.05);
  border: 1px solid rgba(208, 211, 215, 0.3);
  box-sizing: border-box;
  border-radius: 12px;
  padding: 10px;
}
.product-img {
  width: 85%;
  padding: 10%;
}
</style>
