<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" parallax-active="false">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-100 md-small-size-100 mx-auto">
            <md-card class="md-card md-card-signup">
              <md-card-content style="padding: 0 5%">
                <md-button
                  class="md-simple md-github back-button"
                  @click="$router.go(-1)"
                >
                  <i class="fas fa-arrow-left"></i>
                  <h4>Go Back</h4>
                </md-button>
                <h2 class="card-title">Create Multiple Item</h2>

                <div class="md-layout">
                  <div
                    class="md-layout-item md-size-70 md-small-size-100 mx-auto"
                  >
                    <div class="md-layout">
                      <div
                        class="md-layout-item md-size-100 md-small-size-100 mx-auto"
                      >
                        <h3 class="card-title">Upload File</h3>

                        <h4>
                          File types supported: JPG, PNG, GIF, SVG, MP4, WEBM,
                          MP3, WAV, OGG, GLB, GLTF. Max size: 40 MB
                        </h4>
                      </div>

                      <div
                        class="md-layout-item md-size-100 md-xsmall-size-100"
                        style="padding: 0% 20%"
                      >
                        <file-upload type="image-regular" />
                      </div>
                      <div
                        class="md-layout-item md-size-100 md-small-size-100 mx-auto"
                      >
                        <h3 class="card-title">Name*</h3>
                        <div class="comment comment-post">
                          <div class="comment-body">
                            <form class="form">
                              <md-field class="has-success">
                                <md-input
                                  v-model="name"
                                  placeholder="e.g: your products name"
                                />
                              </md-field>
                            </form>
                          </div>
                          <!-- end comment-body -->
                        </div>
                      </div>
                      <div
                        class="md-layout-item md-size-100 md-small-size-100 mx-auto"
                      >
                        <h3 class="card-title">Description</h3>
                        <div class="comment comment-post">
                          <div class="comment-body">
                            <form class="form">
                              <md-field maxlength="5">
                                <md-textarea
                                  v-model="aboutme3"
                                  placeholder="Provide a detailed description of your items."
                                />
                              </md-field>

                              <p>
                                **The description will be included on the item’s
                                detail page unerneath its image.
                              </p>
                            </form>
                          </div>
                          <!-- end comment-body -->
                        </div>
                      </div>
                      <div
                        class="md-layout-item md-size-100 md-small-size-100 mx-auto"
                      >
                        <h3 class="card-title">Put on Marketplace</h3>
                        <div class="comment comment-post">
                          <div class="comment-body">
                            <md-switch v-model="isPutOnMarket"
                              >Set a period of time for which buyers can place
                              bids
                            </md-switch>

                            <div class="md-layout" v-if="isPutOnMarket">
                              <div
                                class="md-layout-item md-size-45 md-small-size-100"
                                :class="
                                  isMarketOption == 1
                                    ? 'is-choose'
                                    : 'is-not-choose'
                                "
                              >
                                <info-areas
                                  icon-color="info"
                                  icon="sell"
                                  text-center
                                  @click.native="isMarketOption = 1"
                                >
                                  <h4 slot="title" class="info-title">
                                    Fixed Price
                                  </h4>
                                </info-areas>
                              </div>
                              <div
                                class="md-layout-item md-size-45 md-small-size-100"
                                :class="
                                  isMarketOption == 3
                                    ? 'is-choose'
                                    : 'is-not-choose'
                                "
                              >
                                <info-areas
                                  icon-color="danger"
                                  icon="all_inclusive"
                                  text-center
                                  @click.native="isMarketOption = 3"
                                >
                                  <h4 slot="title" class="info-title">
                                    Unlimited Auction
                                  </h4>
                                </info-areas>
                              </div>
                            </div>

                            <br />
                          </div>
                          <!-- end comment-body -->
                        </div>
                      </div>
                      <div
                        class="md-layout-item md-size-100 md-small-size-100 mx-auto"
                      >
                        <h3 class="card-title">Minimum Bid</h3>
                        <div class="comment comment-post">
                          <div class="comment-body">
                            <form class="form">
                              <md-field class="has-success">
                                <md-input
                                  v-model="minBid"
                                  type="number"
                                  min="0"
                                  placeholder=""
                                />
                              </md-field>
                              <p>**Bids below this amount won’t be allowed.</p>
                            </form>
                          </div>
                          <!-- end comment-body -->
                        </div>
                      </div>
                      <div
                        class="md-layout-item md-size-50 md-small-size-100 mx-auto"
                      >
                        <h3 class="card-title">Starting Date</h3>
                        <div class="comment comment-post">
                          <div class="comment-body">
                            <form class="form">
                              <md-datepicker v-model="dateSelected">
                              </md-datepicker>
                              <p>
                                **Any bid placed in the last 10 minutes extends
                                the auction by 10 minutes.
                              </p>
                            </form>
                          </div>
                          <!-- end comment-body -->
                        </div>
                      </div>
                      <div
                        class="md-layout-item md-size-50 md-small-size-100 mx-auto"
                      >
                        <h3 class="card-title">Expiration Date</h3>
                        <div class="comment comment-post">
                          <div class="comment-body">
                            <form class="form">
                              <md-field>
                                <md-select
                                  id="selectExpiration"
                                  v-model="selectExpiration"
                                  name="selectExpiration"
                                  placeholder="Select Expiration"
                                >
                                  <md-option value="1"> 1 day </md-option>
                                  <md-option value="2"> 2 days </md-option>
                                  <md-option value="3"> 3 days </md-option>
                                  <md-option value="4"> 4 days </md-option>
                                </md-select>
                              </md-field>
                            </form>
                          </div>
                          <!-- end comment-body -->
                        </div>
                      </div>

                      <div
                        class="md-layout-item md-size-100 md-small-size-100 mx-auto"
                      >
                        <h3 class="card-title">Choose Category</h3>
                        <div class="comment comment-post">
                          <div class="comment-body">
                            <form class="form">
                              <md-field>
                                <md-select
                                  id="selectCategory"
                                  v-model="selectCategory"
                                  name="selectCategory"
                                  placeholder="Select Category"
                                >
                                  <md-option value="Art"> Art </md-option>
                                  <md-option value="Photography">
                                    Photography
                                  </md-option>
                                  <md-option value="Games"> Games </md-option>
                                  <md-option value="Metaverses">
                                    Metaverses
                                  </md-option>
                                  <md-option value="Music"> Music </md-option>
                                  <md-option value="Meme"> Meme </md-option>
                                  <md-option value="Domain">
                                    Domain Names
                                  </md-option>
                                  <md-option value="Sports"> Sports </md-option>
                                </md-select>
                              </md-field>
                              <p>
                                **Adding a category will help make your item
                                discoverable on (NFT Marketplace).
                              </p>
                            </form>
                          </div>
                          <!-- end comment-body -->
                        </div>
                      </div>
                      <div
                        class="md-layout-item md-size-50 md-small-size-100 mx-auto"
                      >
                        <h3 class="card-title">Royalties</h3>
                        <md-field class="md-form-group">
                          <i class="fab fa-dribbble" />
                          <md-input
                            v-model="royalties"
                            readonly
                            disabled
                            placeholder="suggested 10%, 20%,..."
                          />
                        </md-field>
                      </div>
                      <div
                        class="md-layout-item md-size-50 md-small-size-100 mx-auto"
                      >
                        <h3 class="card-title">Number of copies</h3>

                        <md-field class="md-form-group">
                          <i class="fab fa-dribbble" />
                          <md-input
                            v-model="copies"
                            min="1"
                            max="10"
                            type="number"
                            placeholder="suggested 10%, 20%,..."
                          />
                        </md-field>
                        <p>(amount of tokens)</p>
                      </div>
                    </div>
                    <br />

                    <md-button
                      class="md-theme-default md-twitter md-round md-button md-theme-default"
                      >Create Item
                    </md-button>
                  </div>

                  <div
                    class="md-layout-item md-size-30 md-small-size-100 mx-auto"
                  >
                    <h3 class="card-title">Preview</h3>
                    <file-upload type="image-regular" />
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
import { FileUpload, InfoAreas } from "@/components";

export default {
  components: {
    FileUpload,
    InfoAreas,
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "signup-page",
  data() {
    return {
      dateSelected: new Date(),
      aboutme: null,
      aboutme2: null,
      aboutme3: null,
      name: null,
      selectExpiration: "1",
      isMarketOption: 1,
      minBid: 100,
      royalties: "10%",
      selectCategory: null,
      checkbox1: true,
      isPutOnMarket: true,
      copies: 1,
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
  padding-top: 10vh !important;
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

.is-choose {
  border: 2px dashed #2d81ff;
  border-radius: 12px;
  margin: 10px;
}
.is-not-choose {
  border: 2px dashed #d0d3d7;
  border-radius: 12px;
  margin: 10px;
}
</style>
