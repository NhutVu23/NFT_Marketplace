<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" parallax-active="false">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-100 md-small-size-100 mx-auto">
            <md-card class="md-card md-card-signup">
              <md-card-content style="padding: 0 15%">
                <h2 class="card-title">Create New Collection</h2>

                <div class="md-layout">
                  <div
                    class="md-layout-item md-size-20 md-small-size-100 mx-auto"
                  >
                    <file-upload type="image-circle" />
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
                              v-model="aboutme3"
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
                              v-model="name"
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
                    class="md-layout-item md-size-100 md-small-size-100 mx-auto"
                  >
                    <h3 class="card-title">Link</h3>
                    <md-field class="md-form-group">
                      <i class="fab fa-dribbble" />
                      <md-input v-model="subscribe" placeholder="yoursite.io" />
                    </md-field>
                    <md-field class="md-form-group">
                      <i class="fab fa-facebook" />
                      <md-input
                        v-model="subscribe"
                        placeholder="https://www.facebook.com/abcdef"
                      />
                    </md-field>
                    <md-field class="md-form-group">
                      <i class="fab fa-twitter" />
                      <md-input
                        v-model="subscribe"
                        placeholder="@YourTwitterHandle"
                      />
                    </md-field>
                    <md-field class="md-form-group">
                      <i class="fab fa-instagram" />
                      <md-input
                        v-model="subscribe"
                        placeholder="@YourInstagramHandle"
                      />
                    </md-field>
                    <md-field class="md-form-group"
                      ><i class="fab fa-soundcloud" />
                      <md-input
                        v-model="subscribe"
                        placeholder="@YourMediumHandle"
                      />
                    </md-field>
                  </div>
                </div>
                <br />

                <md-button
                  class="md-theme-default md-twitter md-round md-button md-theme-default"
                >
                  Create Collection
                </md-button>
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
import { FileUpload } from "@/components";

export default {
  components: {
    FileUpload,
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "signup-page",
  data() {
    return {
      aboutme: null,
      aboutme2: null,
      aboutme3: null,
      name: null,
      selectCategory: "",
      subscribe: null,
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
