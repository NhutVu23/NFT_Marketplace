<template>
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
                <md-button class="md-just-icon md-rose md-round md-simple">
                  <md-icon>favorite</md-icon>
                  <md-tooltip md-direction="left">
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
                <md-button class="md-just-icon md-rose md-round md-simple">
                  <md-icon>favorite_border</md-icon>
                  <md-tooltip md-direction="left">
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
                <md-button class="md-just-icon md-rose md-round md-simple">
                  <md-icon>favorite_border</md-icon>
                  <md-tooltip md-direction="left">
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
                <md-button class="md-just-icon md-rose md-round md-simple">
                  <md-icon>favorite_border</md-icon>
                  <md-tooltip md-direction="left">
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
                <md-button class="md-just-icon md-rose md-round md-simple">
                  <md-icon>favorite</md-icon>
                  <md-tooltip md-direction="left">
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
                <md-button class="md-just-icon md-rose md-round md-simple">
                  <md-icon>favorite_border</md-icon>
                  <md-tooltip md-direction="left">
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
                <md-button class="md-just-icon md-rose md-round md-simple">
                  <md-icon>favorite</md-icon>
                  <md-tooltip md-direction="left">
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
                <md-button class="md-just-icon md-rose md-round md-simple">
                  <md-icon>favorite_border</md-icon>
                  <md-tooltip md-direction="left">
                    Save to Wishlist
                  </md-tooltip>
                </md-button>
              </div>
            </template>
          </product-card>
        </div>
        <div class="md-layout-item md-size-25 md-small-size-100 mx-auto">
          <md-button class="md-rose md-round"> View Collection </md-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ProductCard } from "@/components";
import Mixins from "@/plugins/basicMixins";

export default {
  components: { ProductCard },
  mounted() {
    const walletAddress = localStorage.getItem("metaMaskAddress");
    if (walletAddress) {
      this.profileName = walletAddress;
    } else {
      this.$router.push("/");
    }
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "profile-page",
  data() {
    return {
      profileName: "",
      image: require("@/assets/img/city-profile.jpg"),
      img: require("@/assets/img/faces/christian.jpg"),

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
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile {
  text-align: left;
  .name {
    margin-top: -80px;
  }
  .md-card-profile,
  .md-card-testimonial {
    margin-top: 0px;
    padding: 0px;
    text-align: left;
    border: transparent;
  }
}

.profile-tabs::v-deep {
  margin-top: -10%;
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
