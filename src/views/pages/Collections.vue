<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      parallax-active="true"
      :style="headerStyle"
    />
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-80 md-small-size-100 mx-auto">
              <div class="profile">
                <profile-card
                  flex-direction-row
                  card-avatar
                  card-plain
                  :shadow-normal="false"
                  :no-colored-shadow="true"
                  :card-image="cardProfile3.cardProfile1"
                >
                  <template slot="cardContent">
                    <h2 class="card-title">Tropic Sherbet</h2>
                    <h4 class="card-category text-muted">
                      I am new to art NTFs
                    </h4>
                    <h4 class="card-title">Wallet Address:</h4>

                    <h4
                      id="testing-code"
                      class="testing-code card-category text-muted"
                    >
                      {{ profileName }}
                    </h4>
                    <md-button @click="copyToClipboard" class="md-success">
                      Copy to clipboard
                      <!-- <md-icon>add</md-icon>
                      <md-tooltip md-direction="top">
                        Copy to clipboard
                      </md-tooltip> -->
                    </md-button>
                  </template>
                </profile-card>
                <div class="follow">
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-dribbble"
                  >
                    <i class="fab fa-dribbble" />
                  </md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-twitter"
                  >
                    <i class="fab fa-twitter" />
                  </md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-pinterest"
                  >
                    <i class="fab fa-pinterest" />
                  </md-button>
                </div>
              </div>
            </div>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-active="1"
              :tab-name="[
                'On Sale (16)',
                'In Wallet (02)',
                'Created (06)',
                'Collections (06)',
                'Likes (48)',
                'Followers (12)',
                'Following (34)',
              ]"
              :tab-icon="[]"
              plain
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <on-sale-tab />
              </template>
              <template slot="tab-pane-2">
                <in-wallet-tab />
              </template>
              <template slot="tab-pane-3">
                <created-item-tab />
              </template>
              <template slot="tab-pane-4">
                <collections-tab />
              </template>
              <template slot="tab-pane-5">
                <likes-tab />
              </template>
              <template slot="tab-pane-6">
                <followers-tab />
              </template>
              <template slot="tab-pane-7">
                <following-tab />
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs, FullBgCard, ProfileCard, Badge } from "@/components";
import Mixins from "@/plugins/basicMixins";
import OnSaleTab from "./tabs/OnSaleTab.vue";
import InWalletTab from "./tabs/InWalletTab.vue";
import CollectionsTab from "./tabs/CollectionsTab.vue";
import LikesTab from "./tabs/LikesTab.vue";
import FollowersTab from "./tabs/FollowersTab.vue";
import FollowingTab from "./tabs/FollowingTab.vue";
import CreatedItemTab from "./tabs/CreatedItemTab.vue";

export default {
  components: {
    Tabs,
    ProfileCard,
    OnSaleTab,
    InWalletTab,
    CollectionsTab,
    LikesTab,
    FollowersTab,
    FollowingTab,
    CreatedItemTab,
  },
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
      cardFullBg: {
        fullBg1: require("@/assets/img/examples/mariya-georgieva.jpg"),
        fullBg2: require("@/assets/img/examples/clem-onojeghuo.jpg"),
        fullBg3: require("@/assets/img/examples/olu-eletu.jpg"),
        fullBg4: require("@/assets/img/examples/floralia.jpg"),
      },
      cardProfile3: {
        cardProfile1: require("@/assets/img/faces/avatar.jpg"),
        cardProfile2: require("@/assets/img/faces/marc.jpg"),
        cardProfile3: require("@/assets/img/faces/kendall.jpg"),
        cardProfile4: require("@/assets/img/faces/card-profile2-square.jpg"),
      },
      tabPane1: [
        { image: require("@/assets/img/examples/studio-1.jpg") },
        { image: require("@/assets/img/examples/studio-2.jpg") },
        { image: require("@/assets/img/examples/studio-4.jpg") },
        { image: require("@/assets/img/examples/studio-5.jpg") },
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") },
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/studio-3.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/studio-1.jpg") },
      ],
    };
  },
  methods: {
    copyToClipboard() {
      var input = document.createElement("input");
      input.setAttribute("value", this.profileName);
      document.body.appendChild(input);
      input.select();
      var result = document.execCommand("copy");
      document.body.removeChild(input);
      alert("Copy to clipboard successfull");
    },
  },
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
