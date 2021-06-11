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
                <h2 class="card-title text-center">Connect your Wallet</h2>
                <h3 class="card-title text-center" style="padding: 0 20%">
                  By connecting your wallet, you agree to our Temr of Service
                  and our Privacy Policy
                </h3>

                <div class="md-layout">
                  <div
                    class="md-layout-item md-size-40 md-small-size-100 mx-auto"
                  >
                    <login-metamask @onComplete="onComplete">
                      <wallet-card
                        card-plain
                        type="horizontal"
                        :shadow-normal="false"
                        :no-colored-shadow="true"
                        :card-image="wallets.wallet1"
                      >
                        <template slot="cardContent">
                          <h4 class="card-title">Metamask</h4>
                          <p class="card-description">
                            A browser extension with great flexibility.
                          </p>
                        </template>
                      </wallet-card></login-metamask
                    >
                  </div>
                  <div
                    class="md-layout-item md-size-40 md-small-size-100 mx-auto"
                  >
                    <wallet-card
                      card-plain
                      type="horizontal"
                      :shadow-normal="false"
                      :no-colored-shadow="true"
                      :card-image="wallets.wallet2"
                    >
                      <template slot="cardContent">
                        <h4 class="card-title">WalletConnect</h4>
                        <p class="card-description">
                          Connect with Rainbow, Trust, Argent and more.
                        </p>
                      </template>
                    </wallet-card>
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
import WalletCard from "../../components/cards/WalletCard.vue";
import LoginMetamask from "../../components/LoginMetamask.vue";

export default {
  components: {
    LoginMetamask,
    WalletCard,
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "signup-page",
  data() {
    return {
      boolean: null,
      image: require("@/assets/img/bg7.jpg"),
      year: new Date().getFullYear(),
      wallets: {
        wallet1: require("@/assets/img/wallets/Metamask.svg"),
        wallet2: require("@/assets/img/wallets/WalletConnect.svg"),
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
