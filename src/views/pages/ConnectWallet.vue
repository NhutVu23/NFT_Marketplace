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
                <h3 class="card-title text-center" style="padding:0 20%">
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
                        :card-image="cardProfile3.cardProfile1"
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
                      :card-image="cardProfile3.wallet2"
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
      <footer class="footer">
        <div class="container flex-direction-row">
          <nav>
            <ul>
              <li>
                <a href="https://www.creative-tim.com"> Codelight </a>
              </li>
              <li>
                <a href="https:///presentation.creative-tim.com"> About Us </a>
              </li>
              <li>
                <a href="https:///blog.creative-tim.com"> Blog </a>
              </li>
              <li>
                <a href="https://www.creative-tim.com/license"> Licenses </a>
              </li>
            </ul>
          </nav>
          <div class="copyright">
            &copy; {{ year }}, made with <md-icon>favorite</md-icon> by
            <a href="https://www.creative-tim.com/" target="_blank"
              >Codelight</a
            >
            for a better web.
          </div>
        </div>
      </footer>
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

      cardProfile3: {
        cardProfile1: require("@/assets/img/wallets/Metamask.svg"),
        wallet2: require("@/assets/img/wallets/WalletConnect.svg"),
      },
    };
  },
  methods: {
    onComplete(data) {
      console.log("data:", data);
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
