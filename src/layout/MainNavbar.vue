<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-fixed"
    :class="`md-${type}`"
    :color-on-scroll="colorOnScroll"
  >
    <!-- :class="{
      [`md-${type}`]: !navbarTransparent,
      [extraNavClasses]: navbarTransparent,
      'md-transparent': navbarTransparent
    }" -->
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">
          {{ brand }}
        </h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar" />
          <span class="icon-bar" />
          <span class="icon-bar" />
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <li class="md-list-item">
                <a
                  :href="'#/'"
                  @click="
                    () => {
                      NavbarStore.showNavbar = false;
                      toggledClass = false;
                    }
                  "
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button
                      class="md-button md-button-link md-white md-simple"
                    >
                      <!-- <md-icon>shopping_cart</md-icon> -->
                      Home</md-button
                    >
                  </div>
                </a>
              </li>
              <li class="md-list-item">
                <a
                  :href="'#/marketPlace'"
                  @click="
                    () => {
                      NavbarStore.showNavbar = false;
                      toggledClass = false;
                    }
                  "
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button
                      class="md-button md-button-link md-white md-simple"
                    >
                      <!-- <md-icon>shopping_cart</md-icon> -->
                      MarketPlace</md-button
                    >
                  </div>
                </a>
              </li>

              <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Stats
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a :href="'#/ranking'"> Ranking </a>
                        </li>
                        <li>
                          <a :href="'#/activity'"> Activity </a>
                        </li>
                        <li></li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
              <li v-if="metaMaskAddress.length > 0" class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">account_circle</i>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a :href="'#'"> My Collectiable </a>
                        </li>
                        <li>
                          <a :href="'#/profile-page'"> My Profile </a>
                        </li>
                        <li>
                          <a :href="'#/settings'"> Settings </a>
                        </li>
                        <li class="logout">
                          <a href="#" @click="logout"> Logout </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>

              <li v-if="metaMaskAddress.length > 0" class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button class="md-rose md-just-icon md-round"
                      ><md-icon>email</md-icon></md-button
                    >
                  </div>
                </a>
              </li>

              <li v-if="metaMaskAddress.length == 0" class="md-list-item">
                <a
                  :href="'#/connect-wallet'"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button
                      class="md-theme-default md-twitter md-round md-button md-theme-default"
                    >
                      Connect Wallet</md-button
                    >
                  </div>
                </a>
              </li>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu,
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info",
          "dark",
        ].includes(value);
      },
    },
    colorOnScroll: {
      type: Number,
      default: 0,
    },
    navbarTransparent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      msg: "This is demo net work",
      docs_link:
        "https://demos.creative-tim.com/vue-material-kit-pro/documentation/",
      extraNavClasses: "",
      toggledClass: false,
      brand: "NFTtify",
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["index"];
      return excludedRoutes.every((r) => r !== this.$route.name);
    },
    metaMaskAddress() {
      return this.$store.state.global.walletAddress;
    },
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
    var localAddress = localStorage.getItem("metaMaskAddress");
    if (localAddress && localAddress.length > 0) {
      this.$store.dispatch("global/setAddress", localAddress);
    } else {
      this.$store.dispatch("global/setAddress", "");
    }
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  },
  methods: {
    logout() {
      localStorage.removeItem("metaMaskAddress");
      this.$store.dispatch("global/setAddress", "");
      this.$router.push("/");
    },
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      // resizeThrottler(this.handleScroll);
    },
  },
};
</script>
