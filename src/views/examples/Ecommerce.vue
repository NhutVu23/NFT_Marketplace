<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter header-small"
      parallax-active="true"
      :style="headerStyle"
    >
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
          >
            <h1 class="title">
              Find Your Treasure
            </h1>
            <h4>
              Discover, collect and sell extraordinary NFTs
            </h4>
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

      <div class="md-layout">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <full-bg-card :card-image="cardProject.cardProject1">
                <template slot="cardContent">
                  <!-- <h6 class="card-category text-info">
                    Worlds
                  </h6> -->
                  <a href="javascript:void(0)">
                    <h3 class="card-title">
                      Async Music Auctions
                    </h3>
                  </a>
                  <p class="card-description">
                    Unique works from Pak, Mike Shinoda, Richie Hawtin and more...
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
            <div class="md-layout-item md-size-50 md-small-size-100">
              <full-bg-card :card-image="cardProject.cardProject2">
                <template slot="cardContent">
                  <!-- <h6 class="card-category text-info">
                    Business
                  </h6> -->
                  <a href="javascript:void(0)">
                    <h3 class="card-title">
                      The Underground Sistine Chapel
                    </h3>
                  </a>
                  <p class="card-description">
                    Collect the 400 characters of a major piece of art
                  </p>
                  <md-button
                    href="javascript:void(0)"
                    class="md-primary md-round"
                  >
                    <md-icon>format_align_left</md-icon> Explore Now
                  </md-button>
                </template>
              </full-bg-card>
            </div>
      </div>
          <h2 class="section-title text-center">
            Live Auctions
          </h2>
          <div class="md-layout">
            <div class="md-layout-item md-size-33 md-small-size-100">
              <product-card
                text-center
                class="mt-3"
                card-plain
                :card-image="productCard.productCard1"
                :shadow-normal="false"
                :no-colored-shadow="false"
              >
                <template slot="cardContent">
                  <h4 class="card-title">
                    Gucci
                  </h4>
                  <p class="card-description">
                    The structured shoulders and sleek detailing ensure a sharp
                    silhouette. Team it with a silk pocket square and leather
                    loafers.
                  </p>
                </template>
                <template slot="cardAction">
                  <div class="price-container">
                    <span class="price price-old"> €1,430</span>
                    <span class="price price-new"> €743</span>
                  </div>
                  <div class="stats ml-auto">
                    <md-button class="md-just-icon md-rose md-round md-simple">
                      <md-icon>favorite</md-icon>
                      <md-tooltip
                        md-direction="top"
                      >
                        Save to Wishlist
                      </md-tooltip>
                    </md-button>
                  </div>
                </template>
              </product-card>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <product-card
                text-center
                class="mt-3"
                card-plain
                :card-image="productCard.productCard2"
                :shadow-normal="false"
                :no-colored-shadow="false"
              >
                <template slot="cardContent">
                  <h4 class="card-title">
                    Dolce & Gabbana
                  </h4>
                  <p class="card-description">
                    The structured shoulders and sleek detailing ensure a sharp
                    silhouette. Team it with a silk pocket square and leather
                    loafers.
                  </p>
                </template>
                <template slot="cardAction">
                  <div class="price-container">
                    <span class="price price-old"> €1,430</span>
                    <span class="price price-new"> €743</span>
                  </div>
                  <div class="stats ml-auto">
                    <md-button class="md-just-icon md-rose md-round md-simple">
                      <md-icon>favorite</md-icon>
                      <md-tooltip
                        md-direction="top"
                      >
                        Save to Wishlist
                      </md-tooltip>
                    </md-button>
                  </div>
                </template>
              </product-card>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <product-card
                text-center
                class="mt-3"
                card-plain
                :card-image="productCard.productCard3"
                :shadow-normal="false"
                :no-colored-shadow="false"
              >
                <template slot="cardContent">
                  <h4 class="card-title">
                    Tom Ford
                  </h4>
                  <p class="card-description">
                    The structured shoulders and sleek detailing ensure a sharp
                    silhouette. Team it with a silk pocket square and leather
                    loafers.
                  </p>
                </template>
                <template slot="cardAction">
                  <div class="price-container">
                    <span class="price price-old"> €1,430</span>
                    <span class="price price-new"> €743</span>
                  </div>
                  <div class="stats ml-auto">
                    <md-button class="md-just-icon md-rose md-round md-simple">
                      <md-icon>favorite</md-icon>
                      <md-tooltip
                        md-direction="top"
                      >
                        Save to Wishlist
                      </md-tooltip>
                    </md-button>
                  </div>
                </template>
              </product-card>
            </div>
          </div>

      <div class="section pb-0">
        <div class="container">
          <h2 class="section-title text-center">
            Explore The Marketplace
          </h2>
          <div class="md-layout">
                  <div
                    class="md-layout-item md-size-25 md-small-size-100 mx-auto"
                  >
                    <profile-card
                      card-plain
                      type="horizontal"
                      :shadow-normal="false"
                      :no-colored-shadow="false"
                      :card-image="cardProfile3.cardProfile1"
                    >
                      <template slot="cardContent">
                        <h4 class="card-title">
                          Marc Jacobs
                        </h4>
                        <h6 class="card-category text-muted">
                          Designer
                        </h6>
                      </template>
                    </profile-card>
                  </div>
                  <div
                    class="md-layout-item md-size-25 md-small-size-100 mx-auto"
                  >
                    <profile-card
                      card-plain
                      type="horizontal"
                      :shadow-normal="false"
                      :no-colored-shadow="false"
                      :card-image="cardProfile3.cardProfile2"
                    >
                      <template slot="cardContent">
                        <h4 class="card-title">
                          Marc Jacobs
                        </h4>
                        <h6 class="card-category text-muted">
                          Designer
                        </h6>
                      </template>
                    </profile-card>
                  </div>
                  <div
                    class="md-layout-item md-size-25 md-small-size-100 mx-auto"
                  >
                    <profile-card
                      card-plain
                      type="horizontal"
                      :shadow-normal="false"
                      :no-colored-shadow="false"
                      :card-image="cardProfile3.cardProfile4"
                    >
                      <template slot="cardContent">
                        <h4 class="card-title">
                          Marc Jacobs
                        </h4>
                        <h6 class="card-category text-muted">
                          Designer
                        </h6>
                      </template>
                    </profile-card>
                  </div>
                  <div
                    class="md-layout-item md-size-25 md-small-size-100 mx-auto"
                  >
                    <profile-card
                      card-plain
                      type="horizontal"
                      :shadow-normal="false"
                      :no-colored-shadow="false"
                      :card-image="cardProfile3.cardProfile3"
                    >
                      <template slot="cardContent">
                        <h4 class="card-title">
                          Marc Jacobs
                        </h4>
                        <h6 class="card-category text-muted">
                          Designer
                        </h6>
                      </template>
                    </profile-card>
                  </div>
          </div>
        </div>
      </div>
        </div>
      </div>

    <div
      class="subscribe-line subscribe-line-image"
      :style="imageSubscribe"
    >
      <div class="container justify-content-center">
        <div class="md-layout">
          <div class="md-layout-item md-size-100 mx-auto text-center">
              <h3 class="title">
                Subscribe to our Newsletter
              </h3>
              <p class="description">
                Join our newsletter and get news in your inbox every week! We
                hate spam too, so no worries about this.
              </p>

                  <md-button
                    href="javascript:void(0)"
                    class="md-danger md-round"
                  >
                    <md-icon>format_align_left</md-icon> Explore Now
                  </md-button>
            <!-- <md-card class="md-card-form-horizontal">
              <md-card-content>
                <form
                  action=""
                  method=""
                >
                  <div class="md-layout">
                    <div
                      class="md-layout-item md-size-66 md-medium-size-50 md-xsmall-size-100"
                    >
                      <md-field class="md-form-group">
                        <md-icon>mail</md-icon>
                        <md-input
                          v-model="subscribe"
                          placeholder="Subscribe"
                        />
                      </md-field>
                    </div>
                    <div
                      class="md-layout-item md-size-33 md-medium-size-50 md-xsmall-size-100"
                    >
                      <md-button
                        class="md-primary md-block"
                      >
                        Subscribe
                      </md-button>
                    </div>
                  </div>
                </form>
              </md-card-content>
            </md-card> -->
          </div>
        </div>
      </div>
    </div>

      <div class="section pb-0">
        <div class="container">
          <h2 class="section-title text-center">
            Explore The Marketplace
          </h2>
          <div class="md-layout">
           
            <div class="md-layout-item md-size-100 md-small-size-100">
              <div class="md-layout">
                <div class="md-layout-item md-size-25 md-small-size-100">
                  <product-card
                    text-center
                    class="mt-3"
                    card-plain
                    :card-image="productCard.productCard4"
                    :shadow-off="true"
                  >
                    <template slot="cardContent">
                      <h4 class="card-title">
                        Polo Ralph Lauren
                      </h4>
                      <p class="card-description">
                        Impeccably tailored in Italy from lightweight navy wool.
                      </p>
                    </template>
                    <template slot="cardAction">
                      <div class="price-container">
                        <span class="price"> €800</span>
                      </div>
                      <div class="stats ml-auto">
                        <md-button
                          class="md-just-icon md-rose md-round md-simple"
                        >
                          <md-icon>favorite</md-icon>
                          <md-tooltip
                            md-direction="left"
                          >
                            Remove from Wishlist
                          </md-tooltip>
                        </md-button>
                      </div>
                    </template>
                  </product-card>
                </div>
                <div class="md-layout-item md-size-25 md-small-size-100">
                  <product-card
                    text-center
                    class="mt-3"
                    card-plain
                    :card-image="productCard.productCard5"
                    :shadow-off="true"
                  >
                    <template slot="cardContent">
                      <h4 class="card-title">
                        Wooyoungmi
                      </h4>
                      <p class="card-description">
                        Dark-grey slub wool, pintucked notch lapels.
                      </p>
                    </template>
                    <template slot="cardAction">
                      <div class="price-container">
                        <span class="price">€555</span>
                      </div>
                      <div class="stats ml-auto">
                        <md-button
                          class="md-just-icon md-rose md-round md-simple"
                        >
                          <md-icon>favorite_border</md-icon>
                          <md-tooltip
                            md-direction="left"
                          >
                            Save to Wishlist
                          </md-tooltip>
                        </md-button>
                      </div>
                    </template>
                  </product-card>
                </div>
                <div class="md-layout-item md-size-25 md-small-size-100">
                  <product-card
                    text-center
                    class="mt-3"
                    card-plain
                    :card-image="productCard.productCard6"
                    :shadow-off="true"
                  >
                    <template slot="cardContent">
                      <h4 class="card-title">
                        Tom Ford
                      </h4>
                      <p class="card-description">
                        Immaculate tailoring is TOM FORD's forte.
                      </p>
                    </template>
                    <template slot="cardAction">
                      <div class="price-container">
                        <span class="price">€879</span>
                      </div>
                      <div class="stats ml-auto">
                        <md-button
                          class="md-just-icon md-rose md-round md-simple"
                        >
                          <md-icon>favorite_border</md-icon>
                          <md-tooltip
                            md-direction="left"
                          >
                            Save to Wishlist
                          </md-tooltip>
                        </md-button>
                      </div>
                    </template>
                  </product-card>
                </div>
                <div class="md-layout-item md-size-25 md-small-size-100">
                  <product-card
                    text-center
                    class="mt-3"
                    card-plain
                    :card-image="productCard.productCard7"
                    :shadow-off="true"
                  >
                    <template slot="cardContent">
                      <h4 class="card-title">
                        Thom Sweeney
                      </h4>
                      <p class="card-description">
                        It's made from lightweight grey wool woven.
                      </p>
                    </template>
                    <template slot="cardAction">
                      <div class="price-container">
                        <span class="price">€680</span>
                      </div>
                      <div class="stats ml-auto">
                        <md-button
                          class="md-just-icon md-rose md-round md-simple"
                        >
                          <md-icon>favorite_border</md-icon>
                          <md-tooltip
                            md-direction="left"
                          >
                            Save to Wishlist
                          </md-tooltip>
                        </md-button>
                      </div>
                    </template>
                  </product-card>
                </div>
                <div class="md-layout-item md-size-25 md-small-size-100">
                  <product-card
                    text-center
                    class="mt-3"
                    card-plain
                    :card-image="productCard.productCard8"
                    :shadow-off="true"
                  >
                    <template slot="cardContent">
                      <h4 class="card-title">
                        Kingsman
                      </h4>
                      <p class="card-description">
                        Crafted from khaki cotton and fully canvassed.
                      </p>
                    </template>
                    <template slot="cardAction">
                      <div class="price-container">
                        <span class="price">€725</span>
                      </div>
                      <div class="stats ml-auto">
                        <md-button
                          class="md-just-icon md-rose md-round md-simple"
                        >
                          <md-icon>favorite</md-icon>
                          <md-tooltip
                            md-direction="left"
                          >
                            Remove from Wishlist
                          </md-tooltip>
                        </md-button>
                      </div>
                    </template>
                  </product-card>
                </div>
                <div class="md-layout-item md-size-25 md-small-size-100">
                  <product-card
                    text-center
                    class="mt-3"
                    card-plain
                    :card-image="productCard.productCard9"
                    :shadow-off="true"
                  >
                    <template slot="cardContent">
                      <h4 class="card-title">
                        Boglioli
                      </h4>
                      <p class="card-description">
                        Masterfully crafted in Northern Italy.
                      </p>
                    </template>
                    <template slot="cardAction">
                      <div class="price-container">
                        <span class="price">€699</span>
                      </div>
                      <div class="stats ml-auto">
                        <md-button
                          class="md-just-icon md-rose md-round md-simple"
                        >
                          <md-icon>favorite_border</md-icon>
                          <md-tooltip
                            md-direction="left"
                          >
                            Save to Wishlist
                          </md-tooltip>
                        </md-button>
                      </div>
                    </template>
                  </product-card>
                </div>
                <div class="md-layout-item md-size-25 md-small-size-100">
                  <product-card
                    text-center
                    class="mt-3"
                    card-plain
                    :card-image="productCard.productCard4"
                    :shadow-off="true"
                  >
                    <template slot="cardContent">
                      <h4 class="card-title">
                        Polo Ralph Lauren
                      </h4>
                      <p class="card-description">
                        Impeccably tailored in Italy from lightweight navy wool.
                      </p>
                    </template>
                    <template slot="cardAction">
                      <div class="price-container">
                        <span class="price"> €800</span>
                      </div>
                      <div class="stats ml-auto">
                        <md-button
                          class="md-just-icon md-rose md-round md-simple"
                        >
                          <md-icon>favorite</md-icon>
                          <md-tooltip
                            md-direction="left"
                          >
                            Remove from Wishlist
                          </md-tooltip>
                        </md-button>
                      </div>
                    </template>
                  </product-card>
                </div>
                <div class="md-layout-item md-size-25 md-small-size-100">
                  <product-card
                    text-center
                    class="mt-3"
                    card-plain
                    :card-image="productCard.productCard5"
                    :shadow-off="true"
                  >
                    <template slot="cardContent">
                      <h4 class="card-title">
                        Wooyoungmi
                      </h4>
                      <p class="card-description">
                        Dark-grey slub wool, pintucked notch lapels.
                      </p>
                    </template>
                    <template slot="cardAction">
                      <div class="price-container">
                        <span class="price">€555</span>
                      </div>
                      <div class="stats ml-auto">
                        <md-button
                          class="md-just-icon md-rose md-round md-simple"
                        >
                          <md-icon>favorite_border</md-icon>
                          <md-tooltip
                            md-direction="left"
                          >
                            Save to Wishlist
                          </md-tooltip>
                        </md-button>
                      </div>
                    </template>
                  </product-card>
                </div>
                <div
                  class="md-layout-item md-size-25 md-small-size-100 mx-auto"
                >
                  <md-button class="md-rose md-round">
                    View Collection
                  </md-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>

    <!-- Features 1 -->
    <div class="section section-features-1">
      <div class="container">

              
          <div style="background: rgba(45, 129, 255, 0.05);">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
          >
            <h2 class="title">
              Create and Sell Your NFTs
            </h2>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-25 md-small-size-100">
            <info-areas
              icon-color="info"
              icon="chat"
              text-center
            >
              <h4
                slot="title"
                class="info-title"
              >
                Set up your wallet
              </h4>
              <p slot="content">Once you’ve set up your wallet of choice, connect it to LOGO by clicking the wallet icon in the top right corner.
              </p>
            </info-areas>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <info-areas
              icon-color="success"
              icon="verified_user"
              text-center
            >
              <h4
                slot="title"
                class="info-title"
              >Create your collection
              </h4>
              <p slot="content">Add social links, a description, profile & banner images, and set a secondary sales fee.
              </p>
            </info-areas>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <info-areas
              icon-color="danger"
              icon="fingerprint"
              text-center
            >
              <h4
                slot="title"
                class="info-title"
              >Add your NFTs
              </h4>
              <p slot="content">Upload your work, add a title and description, and customize your NFTs with properties, stats, and unlockable content.
              </p>
            </info-areas>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <info-areas
              icon-color="danger"
              icon="add_shopping_cart"
              text-center
            >
              <h4
                slot="title"
                class="info-title"
              >List them for sale
              </h4>
              <p slot="content">Choose between auctions, fixed-price listings, and declining-price listings, and we help you sell them!
              </p>
            </info-areas>
          </div>
        </div>
              </div>

        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-small-size-80 mx-auto text-center"
          >
            <h2 class="title">
              Join Our Community
            </h2>
            <h5 class="description">
              Every NFTs on LOGO is authentic and truly unique. Blockchain technology makes this new approach to digital ownership possible. Use our platform to showcase and sell your work to collectors who care about authenticity.
Meet the LOGO team, artists and collectors for platform updates, announcements, and more...
            </h5>

                <div
                  class="md-layout-item md-size-25 md-small-size-100 mx-auto"
                >
                  <md-button class="md-rose md-round">
                    Read More
                  </md-button>
                </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end Features 1 -->
    
    </div>

  </div>
</template>

<script>
import {
  ProductCard,
  FullBgCard,
  ProfileCard,
  // Collapse,
  // FullBgCard,
  // BlogCard,
  // Slider
} from "@/components";
import Mixins from "@/plugins/basicMixins";
import { InfoAreas } from "@/components";

export default {
  components: {
    InfoAreas,
    ProfileCard,
    ProductCard,
    FullBgCard
    // Collapse,
    // FullBgCard,
    // BlogCard,
    // Slider
  },
  mixins: [Mixins.HeaderImage],
  data() {
    return {
      subscribe: null,
      sliders: {
        rangeSlider: [101, 700]
      },
      clothing: {
        blazers: true,
        casualShirts: false,
        formalShirts: false,
        jeans: false,
        polos: false,
        pyjamas: false,
        shorts: false,
        trousers: false
      },
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
        massimo: false
      },
      colour: {
        all: true,
        black: false,
        blue: false,
        brown: false,
        gray: false,
        green: false,
        neutrals: false,
        purple: false
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
        productCard9: require("@/assets/img/examples/suit-6.jpg")
      },
      cardBg: {
        cardBg1: require("@/assets/img/examples/color1.jpg"),
        cardBg2: require("@/assets/img/examples/color3.jpg"),
        cardBg3: require("@/assets/img/examples/color2.jpg"),
        cardBg4: require("@/assets/img/dg3.jpg"),
        cardBg5: require("@/assets/img/dg1.jpg")
      },
      cardBlog: {
        cardBlog1: require("@/assets/img/dg6.jpg"),
        cardBlog2: require("@/assets/img/dg10.jpg"),
        cardBlog3: require("@/assets/img/dg9.jpg")
      },

      cardProject: {
        cardProject1: require("@/assets/img/examples/office2.jpg"),
        cardProject2: require("@/assets/img/examples/blog8.jpg"),
        cardProject3: require("@/assets/img/examples/card-project6.jpg")
      },

      cardProfile3: {
        cardProfile1: require("@/assets/img/faces/avatar.jpg"),
        cardProfile2: require("@/assets/img/faces/marc.jpg"),
        cardProfile3: require("@/assets/img/faces/kendall.jpg"),
        cardProfile4: require("@/assets/img/faces/card-profile2-square.jpg")
      },
    };
  },
  computed: {
    imageSubscribe() {
      return {
        backgroundImage: `url(${this.cardProject.cardProject3})`
      };
    }
  },
  methods: {
    newValue(e) {
      this.sliders.rangeSlider[0] = e[0];
      this.sliders.rangeSlider[1] = e[1];
    }
  }
};
</script>

<style lang="scss" scoped>
.mt-3 {
  margin-top: 1.875rem * 2;
}
.mb-0 {
  margin-bottom: 0;
}
</style>
