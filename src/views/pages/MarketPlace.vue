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
            <h1 class="title">NFT Marketplace</h1>
            <h4 class="title">
              A market made for NFT, where everything is special
            </h4>
            <!-- <md-button class="md-button md-theme-default md-behance md-round">
              Explore The Marketplace
            </md-button> -->
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section pb-0">
        <div class="container">
          <div class="md-layout text-center">
            <div class="md-layout-item">
              <md-button href="javascript:void(0)" class="md-white md-round">
                <i class="fab fa-first-order" /> Art
              </md-button>
              <md-button href="javascript:void(0)" class="md-white md-round">
                <i class="fab fa-facebook-f" /> Photography
              </md-button>
              <md-button href="javascript:void(0)" class="md-white md-round">
                <i class="fa fa-gamepad" /> Games
              </md-button>
              <md-button href="javascript:void(0)" class="md-white md-round">
                <i class="fab fa-google-plus-g" /> Domain Names
              </md-button>
              <md-button href="javascript:void(0)" class="md-white md-round">
                <i class="fa fa-flag" /> Sports
              </md-button>
              <md-button href="javascript:void(0)" class="md-white md-round">
                <i class="fab fa-dribbble" /> Utility
              </md-button>
              <md-button href="javascript:void(0)" class="md-white md-round">
                <i class="fab fa-soundcloud" /> Virtual Worlds
              </md-button>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-25 md-small-size-100">
              <md-card class="md-card md-card-refine md-card-plain">
                <md-card-content>
                  <h4 class="card-title">
                    Apply Filters
                    <md-button class="md-just-icon md-simple md-sm">
                      <md-icon>cached</md-icon>
                      <md-tooltip md-direction="top"> Reset Filter </md-tooltip>
                    </md-button>
                  </h4>
                  <collapse
                    :active-tab="1"
                    :collapse="[
                      'Price Range',
                      'Clothing',
                      'Designer',
                      'Colour',
                    ]"
                    icon="keyboard_arrow_down"
                    color-collapse="rose"
                  >
                    <template slot="md-collapse-pane-1">
                      <span class="price-content">
                        <span class="price-left"
                          >€{{ Math.floor(this.sliders.rangeSlider[0]) }}</span
                        >
                        <span class="price-right"
                          >€{{ Math.floor(this.sliders.rangeSlider[1]) }}</span
                        >
                      </span>

                      <slider
                        v-model="sliders.rangeSlider"
                        :range="{ min: 101, max: 700 }"
                        type="rose"
                        :connect="true"
                        @input="newValue"
                      />
                    </template>
                    <template slot="md-collapse-pane-2">
                      <md-checkbox v-model="clothing.blazers" class="mb-0">
                        Blazers
                      </md-checkbox>
                      <md-checkbox v-model="clothing.casualShirts" class="mb-0">
                        Casual Shirts
                      </md-checkbox>
                      <md-checkbox v-model="clothing.formalShirts" class="mb-0">
                        Formal Shirts
                      </md-checkbox>
                      <md-checkbox v-model="clothing.jeans" class="mb-0">
                        Jeans
                      </md-checkbox>
                      <md-checkbox v-model="clothing.polos" class="mb-0">
                        Polos
                      </md-checkbox>
                      <md-checkbox v-model="clothing.pyjamas" class="mb-0">
                        Pyjamas
                      </md-checkbox>
                      <md-checkbox v-model="clothing.shorts" class="mb-0">
                        Shorts
                      </md-checkbox>
                      <md-checkbox v-model="clothing.trousers" class="mb-0">
                        Trousers
                      </md-checkbox>
                    </template>
                    <template slot="md-collapse-pane-3">
                      <md-checkbox v-model="designer.all" class="mb-0">
                        All
                      </md-checkbox>
                      <md-checkbox v-model="designer.polo" class="mb-0">
                        Polo Ralph Lauren
                      </md-checkbox>
                      <md-checkbox v-model="designer.wooyoungmi" class="mb-0">
                        Wooyoungmi
                      </md-checkbox>
                      <md-checkbox v-model="designer.alexander" class="mb-0">
                        Alexander McQueen
                      </md-checkbox>
                      <md-checkbox v-model="designer.tomFord" class="mb-0">
                        Tom Ford
                      </md-checkbox>
                      <md-checkbox v-model="designer.ami" class="mb-0">
                        AMI
                      </md-checkbox>
                      <md-checkbox v-model="designer.berena" class="mb-0">
                        Berena
                      </md-checkbox>
                      <md-checkbox v-model="designer.sweeney" class="mb-0">
                        Thom Sweeney
                      </md-checkbox>
                      <md-checkbox v-model="designer.burberry" class="mb-0">
                        Burberry Prorsum
                      </md-checkbox>
                      <md-checkbox v-model="designer.calvin" class="mb-0">
                        Calvin Klein
                      </md-checkbox>
                      <md-checkbox v-model="designer.kingsman" class="mb-0">
                        Kingsman
                      </md-checkbox>
                      <md-checkbox v-model="designer.monaco" class="mb-0">
                        Club Monaco
                      </md-checkbox>
                      <md-checkbox v-model="designer.dolce" class="mb-0">
                        Dolce & Gabanna
                      </md-checkbox>
                      <md-checkbox v-model="designer.gucci" class="mb-0">
                        Gucci
                      </md-checkbox>
                      <md-checkbox v-model="designer.biglioli" class="mb-0">
                        Biglioli
                      </md-checkbox>
                      <md-checkbox v-model="designer.lanvin" class="mb-0">
                        Lanvin
                      </md-checkbox>
                      <md-checkbox v-model="designer.piana" class="mb-0">
                        Loro Piana
                      </md-checkbox>
                      <md-checkbox v-model="designer.massimo" class="mb-0">
                        Massimo Alba
                      </md-checkbox>
                    </template>
                    <template slot="md-collapse-pane-4">
                      <md-checkbox v-model="colour.all" class="mb-0">
                        All
                      </md-checkbox>
                      <md-checkbox v-model="colour.black" class="mb-0">
                        Black
                      </md-checkbox>
                      <md-checkbox v-model="colour.blue" class="mb-0">
                        Blue
                      </md-checkbox>
                      <md-checkbox v-model="colour.brown" class="mb-0">
                        Brown
                      </md-checkbox>
                      <md-checkbox v-model="colour.gray" class="mb-0">
                        Gray
                      </md-checkbox>
                      <md-checkbox v-model="colour.green" class="mb-0">
                        Green
                      </md-checkbox>
                      <md-checkbox v-model="colour.neutrals" class="mb-0">
                        Neutrals
                      </md-checkbox>
                      <md-checkbox v-model="colour.purple" class="mb-0">
                        Purple
                      </md-checkbox>
                    </template>
                  </collapse>
                </md-card-content>
              </md-card>
            </div>
            <div class="md-layout-item md-size-75 md-small-size-100">
              <div class="md-layout">
                <div class="md-layout-item md-size-33 md-small-size-100">
                  <product-card
                    text-center
                    class="mt-3"
                    card-plain
                    :card-image="productCard.productCard4"
                    :shadow-off="true"
                  >
                    <template slot="cardContent">
                      <h4 class="card-title">Polo Ralph Lauren</h4>
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
                          <md-tooltip md-direction="left">
                            Remove from Wishlist
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
                    :card-image="productCard.productCard5"
                    :shadow-off="true"
                  >
                    <template slot="cardContent">
                      <h4 class="card-title">Wooyoungmi</h4>
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
                          <md-tooltip md-direction="left">
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
                    :card-image="productCard.productCard6"
                    :shadow-off="true"
                  >
                    <template slot="cardContent">
                      <h4 class="card-title">Tom Ford</h4>
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
                          <md-tooltip md-direction="left">
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
                    :card-image="productCard.productCard7"
                    :shadow-off="true"
                  >
                    <template slot="cardContent">
                      <h4 class="card-title">Thom Sweeney</h4>
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
                          <md-tooltip md-direction="left">
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
                    :card-image="productCard.productCard8"
                    :shadow-off="true"
                  >
                    <template slot="cardContent">
                      <h4 class="card-title">Kingsman</h4>
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
                          <md-tooltip md-direction="left">
                            Remove from Wishlist
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
                    :card-image="productCard.productCard9"
                    :shadow-off="true"
                  >
                    <template slot="cardContent">
                      <h4 class="card-title">Boglioli</h4>
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
                          <md-tooltip md-direction="left">
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
                  <md-button class="md-rose md-round"> Load more.. </md-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import {
  ProductCard,
  Collapse,
  Slider,
} from "@/components";
import Mixins from "@/plugins/basicMixins";
// import { InfoAreas } from "@/components";

export default {
  components: {
    // InfoAreas,
    ProductCard,
    Collapse,
    // FullBgCard,
    // BlogCard,
    Slider,
  },
  mixins: [Mixins.HeaderImage],
  data() {
    return {
      subscribe: null,
      sliders: {
        rangeSlider: [101, 700],
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
      colour: {
        all: true,
        black: false,
        blue: false,
        brown: false,
        gray: false,
        green: false,
        neutrals: false,
        purple: false,
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
    };
  },
  computed: {
    imageSubscribe() {
      return {
        backgroundImage: `url(${this.image2})`,
      };
    },
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
.mt-3 {
  margin-top: 1.875rem * 2;
}
.mb-0 {
  margin-bottom: 0;
}
.md-round {
  border: 1px solid gray;
  color: #3c4858 !important;
}
</style>
