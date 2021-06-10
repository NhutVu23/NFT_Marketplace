import Vue from "vue";
import Router from "vue-router";

//  Main Pages
import Login from "./views/pages/Login.vue";
import Collections from "./views/pages/Collections.vue";
import EditProfile from "./views/pages/EditProfile.vue";
import ConnectWallet from "./views/pages/ConnectWallet.vue";
import Activity from "./views/pages/Activity.vue";
import Settings from "./views/pages/Settings.vue";
import Ecommerce from "./views/pages/Ecommerce.vue";
import MarketPlace from "./views/pages/MarketPlace.vue";
import Ranking from "./views/pages/Ranking.vue";
import Product from "./views/pages/Product.vue";
import Signup from "./views/pages/Signup.vue";
import Error from "./views/pages/Error.vue";

import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import CustomFooter from "./layout/CustomFooter.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: Ecommerce,
        header: MainNavbar,
        footer: CustomFooter,
      },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
      },
    },
    {
      path: "/marketPlace",
      name: "marketPlace",
      components: {
        default: MarketPlace,
        header: MainNavbar,
        footer: CustomFooter,
      },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
      },
    },
    {
      path: "/ranking",
      name: "ranking",
      components: {
        default: Ranking,
        header: MainNavbar,
        footer: CustomFooter,
      },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
      },
    },
    {
      path: "/ecommerce-page",
      name: "ecommerce-page",
      components: {
        default: Ecommerce,
        header: MainNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
        footer: { type: "black", size: "big" },
      },
    },
    {
      path: "/product-page",
      name: "product-page",
      components: {
        default: Product,
        header: MainNavbar,
        footer: CustomFooter,
      },
      props: {
        header: {
          colorOnScroll: 400,
          navbarTransparent: true,
        },
      },
    },
    {
      path: "/login-page",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
      },
    },
    {
      path: "/collections",
      name: "collections",
      components: { default: Collections, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
      },
    },
    {
      path: "/edit-profile",
      name: "edit-profile",
      components: { default: EditProfile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
      },
    },
    {
      path: "/connect-wallet",
      name: "connect-wallet",
      components: {
        default: ConnectWallet,
        header: MainNavbar,
        footer: CustomFooter,
      },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
      },
    },
    {
      path: "/activity",
      name: "activity",
      components: {
        default: Activity,
        header: MainNavbar,
        footer: CustomFooter,
      },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
      },
    },
    {
      path: "/settings",
      name: "settings",
      components: {
        default: Settings,
        header: MainNavbar,
        footer: CustomFooter,
      },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
      },
    },
    {
      path: "/signup-page",
      name: "signup",
      components: { default: Signup, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
      },
    },
    {
      path: "/error-page",
      name: "error",
      components: { default: Error, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
