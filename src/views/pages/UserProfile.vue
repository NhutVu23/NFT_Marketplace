<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      parallax-active="false"
      :style="headerStyle"
    />
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-80 md-small-size-100 mx-auto">
              <div class="profile">
                <profile-card
                  v-if="viewUser"
                  flex-direction-row
                  card-avatar
                  card-plain
                  :shadow-normal="false"
                  :no-colored-shadow="true"
                  :card-image="viewUser ? viewUser.avatar : imageCircle"
                >
                  <template slot="cardContent">
                    <h2 class="card-title show-name">
                      {{
                        viewUser.full_name ||
                        showShortName(viewUser.wallet_address)
                      }}
                    </h2>
                    <h4 class="card-category text-muted">
                      {{ viewUser.bio }}
                    </h4>
                    <h4 class="card-title">Wallet Address:</h4>

                    <h4
                      id="testing-code"
                      class="testing-code card-category text-muted"
                    >
                      {{ viewUser.wallet_address }}
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
            <!-- 'Likes (48)',
                'Followers (12)',
                'Following (34)', -->
            <!-- TODO: count item on each tag -->
            <tabs
              v-if="viewUser"
              :tab-active="tabActive"
              :tab-name="['On Sale ', 'In Wallet ', 'Created ', 'Collections ']"
              :tab-icon="[]"
              plain
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <on-sale-tab :walletAddress="viewUser.wallet_address || ''" />
              </template>
              <template slot="tab-pane-2">
                <in-wallet-tab :walletAddress="viewUser.wallet_address || ''" />
              </template>
              <template slot="tab-pane-3">
                <created-item-tab
                  :walletAddress="viewUser.wallet_address || ''"
                />
              </template>
              <template slot="tab-pane-4">
                <collections-tab
                  :walletAddress="viewUser.wallet_address || ''"
                />
              </template>
              <!-- <template slot="tab-pane-5">
                <likes-tab />
              </template> -->
              <!-- <template slot="tab-pane-6">
                <followers-tab />
              </template>
              <template slot="tab-pane-7">
                <following-tab />
              </template> -->
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
    // LikesTab,
    // FollowersTab,
    // FollowingTab,
    CreatedItemTab,
  },
  computed: {
    userWallet() {
      return this.$route.params.wallet;
    },
    listCategory() {
      return this.$store.state.category.categories;
    },
    userData() {
      return this.$store.state.user?.information;
    },
    image() {
      return this.viewUser?.banner_img || require("@/assets/img/loading.gif");
    },
  },
  watch: {
    userWallet(newValue, oldValue) {
      this.reloadData();
    },
    userData(newValue, oldValue) {
      this.reloadData();
    },
  },
  async mounted() {
    this.reloadData();
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "profile-page",
  data() {
    return {
      profileName: "",
      countInWallet: 0,
      tabActive: 2,
      imageCircle: require("@/assets/img/placeholder.jpg"),
      viewUser: {},
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

      this.$successAlert({
        text: "Copy to clipboard successfull",
      });
    },
    async reloadData() {
      this.$loading(true);
      try {
        if (this.userWallet && this.userWallet.length > 0) {
          this.viewUser = await this.$store.dispatch(
            "user/getUserProfile",
            this.userWallet
          );
          this.profileName = this.viewUser?.wallet_address;
        } else {
          this.viewUser = this.userData;
        }
      } catch (error) {
        this.$failAlert({
          text: error,
        });
      }
      this.$loading(false);
    },
    showShortName(name) {
      if (name) {
        return (
          name.substring(0, 6) +
          "..." +
          name.substring(name.length - 8, name.length)
        );
      }
      return "";
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
