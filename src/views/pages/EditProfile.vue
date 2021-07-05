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
              <h2 class="card-title">Edit Profile</h2>
              <h4>
                You can set preferred display name, create your branded profile
                URL and manage other personal settings
              </h4>
              <br />

              <div class="md-layout">
                <div
                  class="md-layout-item md-size-20 md-small-size-100 mx-auto"
                >
                  <file-upload
                    :inputValue="userData.avatar"
                    type="image-circle"
                    @updateImg="
                      (img) => {
                        userData.fileAvatar = img;
                      }
                    "
                  />
                </div>
                <div
                  class="md-layout-item md-size-80 md-small-size-100 mx-auto"
                >
                  <div class="comment">
                    <div class="comment-body">
                      <h4 class="comment-heading card-title">Avatar Image</h4>
                      <p>
                        We recommend an image of at least 400x400. Gifs work
                        too.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
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

                <div class="md-layout-item md-size-100 md-xsmall-size-100">
                  <file-upload
                    type="image-regular"
                    :inputValue="userData.banner_img"
                    @updateImg="
                      (img) => {
                        userData.fileBanner = img;
                      }
                    "
                  />
                </div>
                <div
                  class="md-layout-item md-size-100 md-small-size-100 mx-auto"
                >
                  <h3 class="card-title">Display Name</h3>
                  <div class="comment comment-post">
                    <div class="comment-body">
                      <form class="form">
                        <md-field class="has-success">
                          <md-input
                            v-model="userData.full_name"
                            placeholder=" Enter your display name"
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
                  <h3 class="card-title">Bio</h3>
                  <div class="comment comment-post">
                    <div class="comment-body">
                      <form class="form">
                        <md-field maxlength="5">
                          <md-textarea
                            v-model="userData.bio"
                            placeholder="Tell about your self in a few words"
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
                  <h3 class="card-title">Custom URL</h3>
                  <div class="comment comment-post">
                    <div class="comment-body">
                      <form class="form">
                        <md-field class="has-success">
                          <md-input
                            v-model="userData.custom_url"
                            placeholder="example.com/ Enter your custom URL"
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
                  <h3 class="card-title">Email</h3>
                  <div class="comment comment-post">
                    <div class="comment-body">
                      <form class="form">
                        <md-field class="has-success">
                          <md-input
                            v-model="userData.email"
                            placeholder="Enter your email"
                          />
                        </md-field>
                        <p>**Your email for marketplace notifications</p>
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
                      v-model="userData.socials.website"
                      placeholder="yoursite.io"
                    />
                  </md-field>
                  <md-field class="md-form-group">
                    <i class="fab fa-facebook" />
                    <md-input
                      v-model="userData.socials.facebook"
                      placeholder="https://www.facebook.com/abcdef"
                    />
                  </md-field>
                  <md-field class="md-form-group">
                    <i class="fab fa-twitter" />
                    <md-input
                      v-model="userData.socials.twitter"
                      placeholder="@YourTwitterHandle"
                    />
                  </md-field>
                  <md-field class="md-form-group">
                    <i class="fab fa-instagram" />
                    <md-input
                      v-model="userData.socials.instagram"
                      placeholder="@YourInstagramHandle"
                    />
                  </md-field>
                  <md-field class="md-form-group"
                    ><i class="fab fa-soundcloud" />
                    <md-input
                      v-model="userData.socials.medium"
                      placeholder="@YourMediumHandle"
                    />
                  </md-field>
                </div>
              </div>
              <br />

              <md-button
                class="md-theme-default md-behance md-round md-button md-theme-default"
                @click="updateProfile"
              >
                Update Profile
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
  mixins: [Mixins.HeaderImage],
  bodyClass: "signup-page",
  data() {
    return {
      name: null,
      subscribe: null,
      checkbox1: true,
      switch1: true,
      image: require("@/assets/img/bg7.jpg"),
      year: new Date().getFullYear(),
    };
  },
  mounted() {
    if (!this.userData) {
      this.$router.push("/connect-wallet");
    }
  },
  methods: {
    async updateProfile() {
      try {
        this.$store.dispatch("user/editProfile", this.userData);
        await this.$successAlert({
          text: "Update Profile Succesfully",
        });
        this.$router.push("/user-profile");
      } catch (error) {
        this.$loading(false);
        this.$failAlert({
          text: error,
        });
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
