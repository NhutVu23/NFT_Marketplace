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
                  v-for="(item, i) in group"
                  :key="i"
                  class="md-layout-item md-size-33 md-small-size-100"
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
                    <div class="avatar">
                      <img :src="item.avatar" />
                    </div>
                  </a>
                  <div class="comment-body">
                    <h4 class="comment-heading">
                      {{ i + 1 }}. {{ item.full_name }}
                    </h4>

                    <p>{{ item.bio }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="subscribe-line subscribe-line-image" :style="imageSubscribe">
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

      <div v-if="listItems && listItems.length > 0" class="section pb-0">
        <div class="container">
          <h2 class="title text-center">Explore The Marketplace</h2>

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
          <div class="md-layout">
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

          <div class="md-layout-item md-size-10 md-small-size-100 mx-auto">
            <md-button @click="goTo('marketPlace')" class="md-rose md-round">
              Show More
            </md-button>
          </div>
        </div>
      </div>
      <br />

      <!-- Features 1 -->
      <div class="section section-features-1">
        <div class="container">
          <div style="background: rgba(45, 129, 255, 0.05)">
            <div class="md-layout">
              <div
                class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
              >
                <h2 class="title">Create and Sell Your NFTs</h2>
              </div>
            </div>
            <div class="md-layout">
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
                <info-areas
                  icon-color="success"
                  icon="verified_user"
                  text-center
                >
                  <h4 slot="title" class="info-title">
                    Create your collection
                  </h4>
                  <p slot="content">
                    Add social links, a description, profile & banner images,
                    and set a secondary sales fee.
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
              class="md-layout-item md-size-66 md-small-size-80 mx-auto text-center"
            >
              <h2 class="title">Join Our Community</h2>
              <h5 class="description">
                Every NFTs on LOGO is authentic and truly unique. Blockchain
                technology makes this new approach to digital ownership
                possible. Use our platform to showcase and sell your work to
                collectors who care about authenticity. Meet the LOGO team,
                artists and collectors for platform updates, announcements, and
                more...
              </h5>

              <div class="md-layout-item md-size-25 md-small-size-100 mx-auto">
                <md-button class="md-rose md-round"> Read More </md-button>
              </div>
              <br />
            </div>
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
      this.listItemsOnSale = await this.$store.dispatch(
        "item/getAllItemsOnSale",
        {
          skip: 0,
          limit: 12,
        }
      );

      for (let index = 0; index < this.listItemsOnSale.length; index++) {
        let tmp = Math.floor(index / 3);
        if (this.carouselItems.length == tmp) {
          this.carouselItems.push([]);
        }
        this.carouselItems[tmp].push(this.listItemsOnSale[index]);
      }
      this.listItems = await this.$store.dispatch("item/getAllItems", {
        skip: Math.floor(Math.random() * 100),
        limit: 20,
      });
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
      carouselItems: [],
      listItems: [],
      listItemsOnSale: [],
      listColllections: [],
      listUsers: [],
      subscribe: null,
      image: require("@/assets/img/examples/homeBanner.png"),
      image2: require("@/assets/img/examples/ecommerce-header.jpg"),

      cardProject: {
        cardProject1: require("@/assets/img/examples/office2.jpg"),
        cardProject2: require("@/assets/img/examples/blog8.jpg"),
        cardProject3: require("@/assets/img/examples/card-project6.jpg"),
      },
      carousel: [],
    };
  },
  computed: {
    imageSubscribe() {
      return {
        backgroundImage: `url(${this.cardProject.cardProject3})`,
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
  },
};
</script>

<style lang="scss" scoped>
.mt-3 {
  margin-top: 1.875rem * 2;
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
}
</style>
