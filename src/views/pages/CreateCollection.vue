<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" parallax-active="false">
      <div class="md-layout">
        <div class="md-layout-item md-size-100 md-small-size-100 mx-auto">
          <md-card class="md-card md-card-signup">
            <md-card-content style="padding: 0 25%">
              <md-button
                class="md-simple md-github back-button"
                @click="goTo('')"
              >
                <i class="fas fa-arrow-left"></i>
                <h4>Go Back</h4>
              </md-button>
              <h2 class="card-title">Create New Collection</h2>

              <div class="md-layout">
                <div
                  class="md-layout-item md-size-20 md-small-size-100 mx-auto"
                >
                  <file-upload
                    type="image-circle"
                    @updateImg="
                      (img) => {
                        newCollection.file = img;
                      }
                    "
                  />
                </div>
                <div
                  class="md-layout-item md-size-80 md-small-size-100 mx-auto"
                >
                  <div class="comment">
                    <div class="comment-body">
                      <h4 class="comment-heading card-title">Logo image</h4>
                      <p>
                        This image will also be used for navigation. 300 x 300
                        recommended.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="md-layout">
                <div
                  class="md-layout-item md-size-100 md-small-size-100 mx-auto"
                >
                  <h3 class="card-title">Banner Image</h3>

                  <h4>
                    This image will appear at the top of your collection page.
                    Avoid including too much text in this banner image, as the
                    dimensions change on different devices. 1400 x 400
                    recommended.
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
                        newCollection.fileBanner = img;
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
                            v-model="newCollection.name"
                            placeholder="e.g: your collection name"
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
                            v-model="newCollection.description"
                            placeholder="Spread some words about your collection"
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
                  <h3 class="card-title">Short URL</h3>
                  <div class="comment comment-post">
                    <div class="comment-body">
                      <form class="form">
                        <md-field class="has-success">
                          <md-input
                            v-model="newCollection.short_url"
                            placeholder="example.com/ Enter short URL"
                          />
                        </md-field>
                        <p>**Will be used as public URL</p>
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
                            v-model="newCollection.category_id"
                            name="selectCategory"
                            placeholder="Select Category"
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
                  <h3 class="card-title">Link</h3>
                  <md-field class="md-form-group">
                    <i class="fab fa-dribbble" />
                    <md-input
                      v-model="newCollection.socials.website"
                      placeholder="yoursite.io"
                    />
                  </md-field>
                  <md-field class="md-form-group">
                    <i class="fab fa-facebook" />
                    <md-input
                      v-model="newCollection.socials.facebook"
                      placeholder="https://www.facebook.com/abcdef"
                    />
                  </md-field>
                  <md-field class="md-form-group">
                    <i class="fab fa-twitter" />
                    <md-input
                      v-model="newCollection.socials.twitter"
                      placeholder="@YourTwitterHandle"
                    />
                  </md-field>
                  <md-field class="md-form-group">
                    <i class="fab fa-instagram" />
                    <md-input
                      v-model="newCollection.socials.instagram"
                      placeholder="@YourInstagramHandle"
                    />
                  </md-field>
                  <md-field class="md-form-group"
                    ><i class="fab fa-soundcloud" />
                    <md-input
                      v-model="newCollection.socials.medium"
                      placeholder="@YourMediumHandle"
                    />
                  </md-field>
                </div>
              </div>
              <br />

              <md-button
                class="md-theme-default md-behance md-round md-button md-theme-default"
                @click="createCollection"
              >
                Create Collection
              </md-button>
            </md-card-content>
          </md-card>
        </div>
      </div>
    </parallax>
  </div>
</template>

<script>
import Mixins from "@/plugins/basicMixins";
import { FileUpload } from "@/components";

export default {
  components: {
    FileUpload,
  },
  computed: {
    listCategory() {
      return this.$store.state.category.categories;
    },
    userData() {
      return this.$store.state.user.information;
    },
  },
  mounted() {
    if (!this.userData) {
      this.$router.push("/connect-wallet");
    }
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "signup-page",
  data() {
    return {
      newCollection: { socials: {} },
      image: require("@/assets/img/bg7.jpg"),
    };
  },
  methods: {
    async createCollection() {
      if (this.userData) {
        this.$loading(true);
        this.newCollection.wallet_address = this.userData.wallet_address;
        try {
          const result = await this.$store.dispatch(
            "collection/createCollection",
            this.newCollection
          );
          this.$loading(false);
          if (result) {
            await this.$successAlert({
              text: "Create Collection Succesfully",
            });

            this.$router.push("/my-collections");
          } else {
            this.$failAlert({
              text: "Create Collection Fail",
            });
          }
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
    goTo(url) {
      this.$router.push("/" + url);
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
