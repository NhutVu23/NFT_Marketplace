<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" parallax-active="false">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-100 md-small-size-100 mx-auto">
            <md-card class="md-card md-card-signup">
              <md-card-content style="padding: 0 10%">
                <h2 class="card-title">Settings</h2>
                <h3 class="card-title">Notification Settings</h3>
                <p>Select which notifications you would like to receive</p>

                <div class="md-layout">
                  <div
                    class="md-layout-item md-size-100 md-small-size-100 mx-auto"
                  >
                    <div class="comment">
                      <md-checkbox v-model="checkbox1"> </md-checkbox>
                      <div class="comment-body">
                        <h4 class="comment-heading">Item Sold</h4>

                        <p>When someone purchased one of your items</p>
                      </div>
                    </div>
                    <div class="comment">
                      <md-checkbox v-model="checkbox1"> </md-checkbox>
                      <div class="comment-body">
                        <h4 class="comment-heading">Bid Activity</h4>

                        <p>When someone bids on one of your items</p>
                      </div>
                    </div>
                    <div class="comment">
                      <md-checkbox v-model="checkbox1"> </md-checkbox>
                      <div class="comment-body">
                        <h4 class="comment-heading">Price Change</h4>

                        <p>
                          When an item you made an offer on changes in price
                        </p>
                      </div>
                    </div>
                    <div class="comment">
                      <md-checkbox v-model="checkbox1"> </md-checkbox>
                      <div class="comment-body">
                        <h4 class="comment-heading">Auction Expiration</h4>

                        <p>When a Dutch or English auction you created ends</p>
                      </div>
                    </div>
                    <div class="comment">
                      <md-checkbox v-model="checkbox1"> </md-checkbox>
                      <div class="comment-body">
                        <h4 class="comment-heading">Outbid</h4>

                        <p>
                          When an offer you placed is exceeded by another user
                        </p>
                      </div>
                    </div>
                    <div class="comment">
                      <md-checkbox v-model="checkbox1"> </md-checkbox>
                      <div class="comment-body">
                        <h4 class="comment-heading">Successful Purchase</h4>

                        <p>When you successfully buy an item</p>
                      </div>
                    </div>
                    <div class="comment">
                      <md-checkbox v-model="checkbox1"> </md-checkbox>
                      <div class="comment-body">
                        <h4 class="comment-heading">Newsletter</h4>

                        <p>Occasional updates from our team</p>
                      </div>
                    </div>

                    <h3 class="card-title">Security</h3>
                    <div class="comment row-detail">
                      <span class="row-left"> Google Authenticator</span>
                      <span class="row-right">
                        <md-switch v-model="switch1"> </md-switch
                      ></span>
                    </div>
                    <div class="comment row-detail">
                      <span class="row-left"> Email Authenticator</span>
                      <span class="row-right">
                        <md-switch v-model="switch1"> </md-switch
                      ></span>
                    </div>
                    <br />

                    <md-button
                      class="md-theme-default md-twitter md-round md-button md-theme-default"
                    >
                      Submit Changes
                    </md-button>
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

export default {
  components: {},
  mixins: [Mixins.HeaderImage],
  bodyClass: "signup-page",
  data() {
    return {
      checkbox1: true,
      switch1: true,
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
  padding: 10vh !important;
}

.table-shopping {
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
}
.row-detail {
  width: 100%;
  display: flow-root;
  padding: 2vh 0;
}
.row-left {
  font-style: normal;
  font-size: 1.125rem;
  line-height: 1.5em;
}
.row-right {
  float: right;
  font-size: 14px;
  color: gray;
  width: 50%;
  line-height: 1.5em;
}
</style>
