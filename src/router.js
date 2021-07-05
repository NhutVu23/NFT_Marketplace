import Vue from "vue";
import Router from "vue-router";

//  Main Pages
import Login from "./views/pages/Login.vue";
import UserProfile from "./views/pages/UserProfile.vue";
import Collection from "./views/pages/Collection.vue";
import CreateCollection from "./views/pages/CreateCollection.vue";
import CreateItem from "./views/pages/CreateItem.vue";
import CreateSingleItem from "./views/pages/CreateSingleItem.vue";
import CreateMultipleItem from "./views/pages/CreateMultipleItem.vue";
import EditProfile from "./views/pages/EditProfile.vue";
import ConnectWallet from "./views/pages/ConnectWallet.vue";
import Activity from "./views/pages/Activity.vue";
import Notifications from "./views/pages/Notifications.vue";
import Settings from "./views/pages/Settings.vue";
import Home from "./views/pages/Home.vue";
import MarketPlace from "./views/pages/MarketPlace.vue";
import Ranking from "./views/pages/Ranking.vue";
import Product from "./views/pages/Product.vue";
import EditItem from "./views/pages/EditItem.vue";
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
        default: Home,
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
      path: "/asset/:id",
      name: "asset",
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
      path: "/editItem/:id",
      name: "editItem",
      components: {
        default: EditItem,
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
      path: "/user-profile",
      name: "user-profile",
      components: {
        default: UserProfile,
        header: MainNavbar,
        footer: CustomFooter,
      },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
      },
    },
    {
      path: "/user-profile/:wallet",
      name: "user-profile",
      components: {
        default: UserProfile,
        header: MainNavbar,
        footer: CustomFooter,
      },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
      },
    },
    {
      path: "/collection/:id",
      name: "collection",
      components: {
        default: Collection,
        header: MainNavbar,
        footer: CustomFooter,
      },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
      },
    },
    {
      path: "/create-item",
      name: "create-item",
      components: {
        default: CreateItem,
        header: MainNavbar,
        footer: CustomFooter,
      },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
      },
    },
    {
      path: "/create-single-item",
      name: "create-single-item",
      components: {
        default: CreateSingleItem,
        header: MainNavbar,
        footer: CustomFooter,
      },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
      },
    },
    {
      path: "/create-multiple-item",
      name: "create-multiple-item",
      components: {
        default: CreateMultipleItem,
        header: MainNavbar,
        footer: CustomFooter,
      },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
      },
    },
    {
      path: "/create-collection",
      name: "create-collection",
      components: {
        default: CreateCollection,
        header: MainNavbar,
        footer: CustomFooter,
      },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true },
      },
    },
    {
      path: "/edit-profile",
      name: "edit-profile",
      components: {
        default: EditProfile,
        header: MainNavbar,
        footer: CustomFooter,
      },
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
      path: "/notifications",
      name: "notifications",
      components: {
        default: Notifications,
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
