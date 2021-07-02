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
            class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
          >
            <h1 class="title">Find Your Treasure</h1>
            <h4 class="title">Discover, collect and sell extraordinary NFTs</h4>
            <md-button class="md-button md-theme-default md-behance md-round">
              Explore The Marketplace
            </md-button>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <!-- <md-card> -->
          <el-carousel
            v-if="carousel && carousel.length > 0"
            trigger="click"
            :interval="10000"
          >
            <el-carousel-item v-for="(group, i) in carousel" :key="i">
              <div class="md-layout mt-3">
                <div
                  v-for="(item, i) in group"
                  :key="i"
                  class="md-layout-item md-size-50 md-small-size-100 mx-auto"
                >
                  <full-bg-card :card-image="item.image">
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
                      <md-button
                        href="javascript:void(0)"
                        class="md-danger md-round"
                      >
                        <md-icon>format_align_left</md-icon> Explore Now
                      </md-button>
                    </template>
                  </full-bg-card>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
          <!-- </md-card> -->
          <h2
            v-if="carouselItems && carouselItems.length > 0"
            class="title text-center auctions"
          >
            Live Auctions
          </h2>
          <el-carousel
            v-if="carouselItems && carouselItems.length > 0"
            trigger="click"
            :interval="10000"
          >
            <el-carousel-item v-for="(group, i) in carouselItems" :key="i">
              <div class="md-layout">
                <div
                  v-for="(item, k) in group"
                  :key="k"
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
                      <p class="show-name">Owner: {{ item.owner }}</p>
                      <p class="show-name">
                        On Sale 1 of {{ item.total_quantity }}
                      </p>
                    </template>
                    <template slot="cardAction">
                      <div class="price-container card-title">
                        {{ item.name }} #{{ item.token_id }}
                      </div>
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

          <div v-if="listUsers && listUsers.length > 0" class="container">
            <h2 class="title text-center">Top Sellers</h2>
            <div class="md-layout">
              <div
                class="md-layout-item md-size-25 md-small-size-100"
                v-for="(item, i) in listUsers"
                :key="i"
              >
                <div class="comment">
                  <a class="float-left" href="javascript:void(0)">
                    {{ i + 1 }}
                  </a>
                  <a class="float-left" href="javascript:void(0)">
                    <div class="avatar" v-lazy-container="{ selector: 'img' }">
                      <img :data-src="item.avatar" :data-loading="loadimage" />
                    </div>
                  </a>
                  <div class="comment-body">
                    <h4 class="comment-heading">
                      {{ item.full_name }}
                    </h4>

                    <p>{{ item.bio }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="subscribe-line subscribe-line-image mt-3"
        :style="imageSubscribe"
      >
        <div class="container justify-content-center">
          <div class="md-layout">
            <div class="md-layout-item md-size-100 mx-auto text-center">
              <h3 class="title">Subscribe to our Newsletter</h3>
              <p class="title">
                Join our newsletter and get news in your inbox every week! We
                hate spam too, so no worries about this.
              </p>

              <md-button href="javascript:void(0)" class="md-danger md-round">
                <md-icon>format_align_left</md-icon> Explore Now
              </md-button>
            </div>
          </div>
        </div>
      </div>

      <div class="section pb-0">
        <div class="container mt-3">
          <h2 class="title text-center mt-3">Explore The Marketplace</h2>

          <div class="md-layout text-center">
            <div class="md-layout-item">
              <md-button
                href="javascript:void(0)"
                class="md-round"
                :class="
                  'All' == filterName ? ' md-behance' : 'md-button-filter'
                "
                @click="
                  () => {
                    getAllItems();
                    filterName = 'All';
                  }
                "
              >
                All
              </md-button>
              <md-button
                v-for="(category, i) in listCategory"
                :key="i"
                href="javascript:void(0)"
                class="md-round"
                :class="
                  category.name == filterName
                    ? ' md-behance'
                    : 'md-button-filter'
                "
                @click="
                  () => {
                    filterName = category.name;
                    getItemsByCategory(category._id);
                  }
                "
              >
                <md-icon>{{ category.short_url }}</md-icon>
                {{ category.name }}
              </md-button>
            </div>
          </div>
          <div class="md-layout" v-if="listItems && listItems.length > 0">
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
          <div
            class="md-layout-item md-size-50 md-small-size-100 mx-auto text-center"
            style="padding: 10%"
            v-else
          >
            <h2 class="description">No Data Information</h2>
          </div>

          <div
            class="md-layout-item md-size-10 md-small-size-100 mx-auto text-center"
          >
            <md-button
              v-if="listItems && listItems.length > 15"
              @click="goTo('marketPlace')"
              class="md-button-filter md-round"
            >
              Show More
            </md-button>
          </div>
        </div>
      </div>
      <br />

      <!-- Features 1 -->
      <div class="section section-features-1">
        <div class="box-item">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
            >
              <h2 class="title">Create and Sell Your NFTs</h2>
            </div>
          </div>
          <div class="md-layout" style="padding: 0 15%">
            <div class="md-layout-item md-size-25 md-small-size-100">
              <info-areas icon-color="info" icon="chat" text-center>
                <h4 slot="title" class="info-title">Set up your wallet</h4>
                <p slot="content">
                  Once you’ve set up your wallet of choice, connect it to LOGO
                  by clicking the wallet icon in the top right corner.
                </p>
              </info-areas>
            </div>
            <div class="md-layout-item md-size-25 md-small-size-100">
              <info-areas icon-color="success" icon="verified_user" text-center>
                <h4 slot="title" class="info-title">Create your collection</h4>
                <p slot="content">
                  Add social links, a description, profile & banner images, and
                  set a secondary sales fee.
                </p>
              </info-areas>
            </div>
            <div class="md-layout-item md-size-25 md-small-size-100">
              <info-areas icon-color="danger" icon="fingerprint" text-center>
                <h4 slot="title" class="info-title">Add your NFTs</h4>
                <p slot="content">
                  Upload your work, add a title and description, and customize
                  your NFTs with properties, stats, and unlockable content.
                </p>
              </info-areas>
            </div>
            <div class="md-layout-item md-size-25 md-small-size-100">
              <info-areas
                icon-color="danger"
                icon="add_shopping_cart"
                text-center
              >
                <h4 slot="title" class="info-title">List them for sale</h4>
                <p slot="content">
                  Choose between auctions, fixed-price listings, and
                  declining-price listings, and we help you sell them!
                </p>
              </info-areas>
            </div>
          </div>
        </div>

        <div class="md-layout">
          <div
            class="md-layout-item md-size-60 md-small-size-80 mx-auto text-center"
          >
            <h2 class="title">Join Our Community</h2>
            <h5 class="description">
              Every NFTs on LOGO is authentic and truly unique. Blockchain
              technology makes this new approach to digital ownership possible.
              Use our platform to showcase and sell your work to collectors who
              care about authenticity. Meet the LOGO team, artists and
              collectors for platform updates, announcements, and more...
            </h5>

            <div class="md-layout-item md-size-25 md-small-size-100 mx-auto">
              <md-button class="md-button-filter md-round">
                Read More
              </md-button>
            </div>
            <br />
          </div>
        </div>
      </div>
      <!-- end Features 1 -->
    </div>
  </div>
</template>

<script>
import { FullBgCard } from "@/components";
import Mixins from "@/plugins/basicMixins";
import { InfoAreas } from "@/components";
import AutionCard from "../../components/cards/AutionCard.vue";

export default {
  components: {
    InfoAreas,
    FullBgCard,
    AutionCard,
  },
  async mounted() {
    this.$loading(true);
    try {
      await this.getItemsOnSale();
      this.$loading(false);
      await this.getAllItems();
      await this.getListCollections();
      this.listUsers = await this.$store.dispatch("user/getAllUsers");
    } catch (error) {
      this.$failAlert({
        text: error,
      });
    }
    this.$loading(false);
  },
  mixins: [Mixins.HeaderImage],
  data() {
    return {
      loadimage: require("@/assets/img/loading.gif"),
      carouselItems: [],
      listItems: [],
      listItemsOnSale: [],
      listColllections: [],
      listUsers: [],
      subscribe: null,
      filterName: "All",
      image: require("@/assets/img/examples/homeBanner.png"),
      image2: require("@/assets/img/examples/ecommerce-header.jpg"),
      carousel: [],
    };
  },
  computed: {
    imageSubscribe() {
      return {
        backgroundImage: `url(${this.image2})`,
      };
    },
    listCategory() {
      return this.$store.state.category.categories;
    },
  },
  methods: {
    goTo(url) {
      this.$router.push("/" + url);
    },
    async getAllItems() {
      this.listItems = await this.$store.dispatch("item/getAllItems", {
        skip: Math.floor(Math.random() * 100),
        limit: 16,
      });
    },
    async getItemsByCategory(categoryID) {
      this.listItems = await this.$store.dispatch("item/getItemsByCategory", {
        skip: 0,
        limit: 16,
        keySearch: categoryID,
      });
    },
    async getItemsOnSale() {
      this.listItemsOnSale = await this.$store.dispatch(
        "item/getAllItemsOnSale",
        {
          skip: 0,
          limit: 12,
        }
      );

      const saleItemsSigned = this.listItemsOnSale.filter(
        (x) => x.isPutOnMarket && x.sellOrder
      );

      for (let index = 0; index < saleItemsSigned.length; index++) {
        let tmp = Math.floor(index / 4);
        if (this.carouselItems.length == tmp) {
          this.carouselItems.push([]);
        }
        this.carouselItems[tmp].push(saleItemsSigned[index]);
      }
    },
    async getListCollections() {
      this.listColllections = await this.$store.dispatch(
        "collection/getAllCollections"
      );

      for (let index = 0; index < this.listColllections.length; index++) {
        let tmp = Math.floor(index / 2);
        if (this.carousel.length == tmp) {
          this.carousel.push([]);
        }
        this.carousel[tmp].push(this.listColllections[index]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0%;
}
.mt-3 {
  margin-top: 2.5rem;
}
.mb-0 {
  margin-bottom: 0;
}

.md-button .md-ripple {
  font-size: 18px !important;
  padding: 5px !important;
}
.auctions {
  background: -webkit-linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}
.box-item {
  background: rgba(45, 129, 255, 0.05);
  padding: 10px;
  border-radius: 10px;
}
</style>
