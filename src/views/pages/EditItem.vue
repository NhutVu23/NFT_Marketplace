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
              <h2 class="card-title">Edit Item</h2>

              <div class="md-layout" v-if="item">
                <div
                  class="md-layout-item md-size-100 md-small-size-100 mx-auto"
                >
                  <div class="md-layout">
                    <div
                      class="md-layout-item md-size-100 md-xsmall-size-100"
                      style="padding: 0% 20%"
                    >
                      <img :src="item.image" />
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
                                v-model="item.name"
                                placeholder="e.g: your products name"
                                readonly
                                disabled
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
                                v-model="item.description"
                                placeholder="Provide a detailed description of your items."
                                readonly
                                disabled
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
                          <md-switch v-model="item.isPutOnMarket"
                            >Set a period of time for which buyers can place
                            bids
                          </md-switch>

                          <div class="md-layout" v-if="item.isPutOnMarket">
                            <div
                              class="md-layout-item md-size-45 md-small-size-100"
                              :class="
                                item.isMarketOption == 1
                                  ? 'is-choose'
                                  : 'is-not-choose'
                              "
                            >
                              <info-areas
                                icon-color="info"
                                icon="sell"
                                text-center
                                @click.native="item.isMarketOption = 1"
                              >
                                <h4 slot="title" class="info-title">
                                  Fixed Price
                                </h4>
                              </info-areas>
                            </div>
                            <div
                              class="md-layout-item md-size-45 md-small-size-100"
                              :class="
                                item.isMarketOption == 3
                                  ? 'is-choose'
                                  : 'is-not-choose'
                              "
                            >
                              <info-areas
                                icon-color="danger"
                                icon="all_inclusive"
                                text-center
                                @click.native="item.isMarketOption = 3"
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
                                v-model="item.minBid"
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
                            <md-datepicker v-model="item.startBid">
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
                                v-model="item.expireBid"
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
                                v-model="item.category_id"
                                name="selectCategory"
                                placeholder="Select Category"
                                readonly
                                disabled
                              >
                                <md-option
                                  v-for="(item, i) in listCategory"
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
                                v-model="item.collection_id"
                                name="selectCategory"
                                placeholder="Select Collection"
                                readonly
                                disabled
                              >
                                <md-option
                                  v-for="item in listCollections"
                                  :key="item._id"
                                  :value="item._id"
                                  readonly
                                  disabled
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
                      class="md-layout-item md-size-50 md-small-size-100 mx-auto"
                    >
                      <h3 class="card-title">Royalties (%)</h3>
                      <md-field class="md-form-group">
                        <i class="fab fa-dribbble" />
                        <md-input
                          v-model="item.royalties"
                          readonly
                          disabled
                          placeholder="suggested 10%, 20%,..."
                        />
                      </md-field>
                    </div>
                    <div
                      class="md-layout-item md-size-50 md-small-size-100 mx-auto"
                    >
                      <h3 class="card-title">Number of total_quantity</h3>

                      <md-field class="md-form-group">
                        <i class="fab fa-dribbble" />
                        <md-input
                          v-model="item.total_quantity"
                          min="1"
                          max="10"
                          type="number"
                          placeholder="number of copy"
                          readonly
                          disabled
                        />
                      </md-field>
                      <p>(amount of tokens)</p>
                    </div>
                  </div>
                  <br />

                  <md-button
                    class="md-theme-default md-behance md-round md-button md-theme-default"
                    @click="editItem"
                    >Update Item
                  </md-button>
                </div>

                <!-- <div
                  class="md-layout-item md-size-30 md-small-size-100 mx-auto"
                >
                  <h3 class="card-title">Preview</h3>
                  <file-upload
                    type="image-regular"
                    @updateImg="
                      (img) => {
                        item.previewFile = img;
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
import { InfoAreas } from "@/components";

export default {
  components: {
    InfoAreas,
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "signup-page",
  computed: {
    itemId() {
      return this.$route.params.id;
    },
    listCategory() {
      return this.$store.state.category.categories;
    },
    userData() {
      return this.$store.state.user.information;
    },
    wallet_address() {
      return this.userData?.wallet_address;
    },
  },

  watch: {
    async itemId(newValue, oldValue) {
      if (newValue && newValue.length > 0) {
        this.item = await this.getItem();
      }
    },
  },
  async mounted() {
    this.$loading(true);
    try {
      this.item = await this.getItem();
    } catch (error) {
      this.$loading(false);
      this.$failAlert({
        text: error,
      });
      this.$router.go(-1);
    }

    if (this.wallet_address) {
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
    } else {
      this.$router.push("/connect-wallet");
    }

    this.$loading(false);
  },
  data() {
    return {
      listCollections: [],
      image: require("@/assets/img/bg7.jpg"),
      item: null,
    };
  },
  methods: {
    async editItem() {
      if (this.userData) {
        this.item.id = this.item._id;
        this.item.wallet_address = this.userData.wallet_address;
        this.item.total_quantity = Number(this.item.total_quantity);
        this.item.minBid = Number(this.item.minBid);
        try {
          await this.$store.dispatch("item/editItem", this.item);
          this.$loading(false);

          await this.$successAlert({
            text: "Create Collection Succesfully",
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
    getItem() {
      return this.$store.dispatch("item/getDetailItem", { id: this.itemId });
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
