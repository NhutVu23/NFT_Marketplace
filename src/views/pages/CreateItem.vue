<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" parallax-active="false">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-100 md-small-size-100 mx-auto">
            <md-card class="md-card md-card-signup">
              <md-card-content style="padding: 0 15%">
                <h2 class="card-title">Create New Item</h2>
                <h3>
                  Choose “Single” if you want your collectible to be one of a
                  kind or “Multiple” if you want to sell one collectible
                  multiple times
                </h3>

                <div class="md-layout">
                  <div
                    class="md-layout-item md-size-40 md-small-size-100 mx-auto"
                  >
                    <product-card
                      text-center
                      class="mt-3"
                      card-plain
                      :card-image="cardImgs.cardImg1"
                      :shadow-normal="false"
                      :no-colored-shadow="true"
                    >
                      <template slot="cardContent">
                        <h4 class="card-title">Single</h4>
                      </template>
                    </product-card>
                  </div>
                  <div
                    class="md-layout-item md-size-40 md-small-size-100 mx-auto"
                  >
                    <product-card
                      text-center
                      class="mt-3"
                      card-plain
                      :shadow-normal="false"
                      :no-colored-shadow="true"
                      :card-image="cardImgs.cardImg2"
                    >
                      <template slot="cardContent">
                        <h4 class="card-title">Multiple</h4>
                      </template>
                    </product-card>
                  </div>
                </div>

                <h3>
                  We do not own your private keys and cannot access your funds
                  without your confirmation
                </h3>
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
import ProductCard from "../../components/cards/WalletCard.vue";

export default {
  components: {
    ProductCard,
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "signup-page",
  data() {
    return {
      boolean: null,
      image: require("@/assets/img/bg7.jpg"),
      year: new Date().getFullYear(),
      contentLeft: [
        {
          colorIcon: "success",
          icon: "timeline",
          title: "Marketing",
          description:
            "We've created the marketing campaign of the website. It was a very interesting collaboration.",
        },

        {
          colorIcon: "danger",
          icon: "code",
          title: "Fully Coded in HTML5",
          description:
            "We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.",
        },

        {
          colorIcon: "info",
          icon: "group",
          title: "Built Audience",
          description:
            "There is also a Fully Customizable CMS Admin Dashboard for this product.",
        },
      ],

      cardImgs: {
        cardImg1: require("@/assets/img/items/Single.svg"),
        cardImg2: require("@/assets/img/items/Multiple.svg"),
      },
    };
  },
  methods: {
    onComplete(data) {
      if (data && data.metaMaskAddress) {
        localStorage.setItem("metaMaskAddress", data.metaMaskAddress);
        this.$store.dispatch("global/setAddress", data.metaMaskAddress);

        this.$router.push("/");
      } else {
        localStorage.removeItem("metaMaskAddress");
        this.$store.dispatch("global/setAddress", "");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 10vh !important;
}
</style>
