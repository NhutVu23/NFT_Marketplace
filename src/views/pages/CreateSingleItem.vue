<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" parallax-active="false">
      <div class="md-layout">
        <div class="md-layout-item md-size-100 md-small-size-100 mx-auto">
          <md-card class="md-card md-card-signup">
            <md-card-content style="padding: 0 25%">
              <md-button
                class="md-simple md-github back-button"
                @click="$router.go(-1)"
              >
                <i class="fas fa-arrow-left"></i>
                <h4>Go Back</h4>
              </md-button>
              <h2 class="card-title">Create Single Item</h2>

              <div class="md-layout">
                <div
                  class="md-layout-item md-size-100 md-small-size-100 mx-auto"
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
                      <file-upload
                        type="image-regular"
                        @updateImg="
                          (img) => {
                            sigleItem.file = img;
                          }
                        "
                      />
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
                                v-model="sigleItem.name"
                                placeholder="e.g: your product name"
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
                                v-model="sigleItem.description"
                                placeholder="Provide a detailed description of your item."
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
                          <md-switch v-model="sigleItem.isPutOnMarket"
                            >Set a period of time for which buyers can place
                            bids
                          </md-switch>
                          <div class="md-layout" v-if="sigleItem.isPutOnMarket">
                            <div
                              class="md-layout-item md-size-30 md-small-size-100"
                              :class="
                                sigleItem.isMarketOption == 1
                                  ? 'is-choose'
                                  : 'is-not-choose'
                              "
                            >
                              <info-areas
                                icon-color="info"
                                icon="sell"
                                text-center
                                @click.native="sigleItem.isMarketOption = 1"
                              >
                                <h4 slot="title" class="info-title">
                                  Fixed Price
                                </h4>
                              </info-areas>
                            </div>
                            <div
                              class="md-layout-item md-size-30 md-small-size-100"
                              :class="
                                sigleItem.isMarketOption == 2
                                  ? 'is-choose'
                                  : 'is-not-choose'
                              "
                            >
                              <info-areas
                                icon-color="success"
                                icon="access_time"
                                text-center
                                @click.native="sigleItem.isMarketOption = 2"
                              >
                                <h4 slot="title" class="info-title">
                                  Timed Auction
                                </h4>
                              </info-areas>
                            </div>
                            <div
                              class="md-layout-item md-size-30 md-small-size-100"
                              :class="
                                sigleItem.isMarketOption == 3
                                  ? 'is-choose'
                                  : 'is-not-choose'
                              "
                            >
                              <info-areas
                                icon-color="danger"
                                icon="all_inclusive"
                                text-center
                                @click.native="sigleItem.isMarketOption = 3"
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
                      <h3 class="card-title">Price</h3>
                      <div class="comment comment-post">
                        <div class="comment-body">
                          <form class="form">
                            <md-field class="has-success">
                              <md-input
                                type="number"
                                v-model="sigleItem.minBid"
                                placeholder=""
                                min="0"
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
                            <md-datepicker v-model="sigleItem.startBid">
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
                                v-model="sigleItem.expireBid"
                                name="selectExpiration"
                                placeholder="Select Expiration"
                              >
                                <md-option :value="1"> 1 day </md-option>
                                <md-option :value="2"> 2 days </md-option>
                                <md-option :value="3"> 3 days </md-option>
                                <md-option :value="4"> 4 days </md-option>
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
                                v-model="sigleItem.category_id"
                                name="selectCategory"
                                placeholder="Select Category"
                              >
                                <md-option
                                  v-for="(item, i) in listCategories"
                                  :key="i"
                                  :value="item._id"
                                >
                                  {{ item.name }}
                                </md-option>
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
                      class="md-layout-item md-size-100 md-small-size-100 mx-auto"
                    >
                      <h3 class="card-title">Choose Collection</h3>
                      <div class="comment comment-post">
                        <div class="comment-body">
                          <form class="form">
                            <md-field>
                              <md-select
                                id="selectCollection"
                                v-model="sigleItem.collection_id"
                                name="selectCategory"
                                placeholder="Select Collection"
                              >
                                <md-option
                                  v-for="item in listCollections"
                                  :key="item._id"
                                  :value="item._id"
                                >
                                  {{ item.name }}
                                </md-option>
                              </md-select>
                            </md-field>
                            <p>
                              **Adding a collection will help make your item
                              discoverable on (NFT Marketplace).
                            </p>
                          </form>
                        </div>
                        <!-- end comment-body -->
                      </div>
                    </div>

                    <div
                      class="md-layout-item md-size-100 md-small-size-100 mx-auto"
                    >
                      <h3 class="card-title">Royalties (%)</h3>
                      <md-field class="md-form-group">
                        <i class="fab fa-dribbble" />
                        <md-input
                          v-model="sigleItem.royalties"
                          readonly
                          disabled
                          placeholder="suggested 10%, 20%,..."
                        />
                      </md-field>
                    </div>
                  </div>
                  <br />

                  <md-button
                    class="md-theme-default md-behance md-round md-button md-theme-default"
                    @click="createSignleItem"
                    >Create Item
                  </md-button>
                </div>
                <br />

                <!-- <div
                  class="md-layout-item md-size-30 md-small-size-100 mx-auto"
                >
                  <h3 class="card-title">Preview</h3>
                  <file-upload
                    type="image-regular"
                    @updateImg="
                      (img) => {
                        sigleItem.previewFile = img;
                      }
                    "
                  />
                </div> -->
              </div>
            </md-card-content>
          </md-card>
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
    InfoAreas,
    FileUpload,
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "signup-page",
  computed: {
    listCategories() {
      return this.$store.state.category.categories;
    },
    userData() {
      return this.$store.state.user.information;
    },
    wallet_address() {
      return this.userData?.wallet_address;
    },
  },
  async mounted() {
    if (this.userData) {
      if (this.wallet_address) {
        this.$loading(true);
        try {
          this.listCollections = await this.$store.dispatch(
            "collection/getCollectionForUser",
            { wallet_address: this.wallet_address }
          );
        } catch (error) {
          this.$failAlert({
            text: error,
          });
        }

        this.$loading(false);
      }
    } else {
      this.$router.push("/connect-wallet");
    }
  },
  data() {
    return {
      sigleItem: {
        isMarketOption: 0,
        isPutOnMarket: false,
        category_id: "",
        startBid: new Date(),
        expireBid: 1,
        minBid: 1,
        total_quantity: 1,
        royalties: 10,
        traits: [],
      },
      listCollections: [],
      image: require("@/assets/img/bg7.jpg"),
    };
  },
  methods: {
    async createSignleItem() {
      if (this.userData) {
        this.$loading(true);
        this.sigleItem.token_id = -1;
        this.sigleItem.wallet_address = this.userData.wallet_address;
        this.sigleItem.total_quantity = Number(this.sigleItem.total_quantity);
        this.sigleItem.minBid = Number(this.sigleItem.minBid);

        try {
          await this.$store.dispatch("item/createItem", this.sigleItem);
          this.$loading(false);

          await this.$successAlert({
            text: "Create Item Succesfully",
          });

          this.$router.push("/my-collections");
        } catch (error) {
          this.$loading(false);
          this.$failAlert({
            text: error,
          });
        }
      } else {
        this.$router.push("/connect-wallet");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.md-layout {
  margin-left: -5px;
}
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
