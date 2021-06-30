import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import Chart from "vue2-frappe";
import "sweetalert2/src/sweetalert2.scss";
import VueLazyload from "vue-lazyload";

import MaterialKit from "./plugins/material-kit";

Vue.config.productionTip = false;

Vue.use(MaterialKit);
Vue.use(Chart);
// Vue.use(VueLazyload); //  default option

// custom option
const loadimage = require("@/assets/img/image_placeholder.jpg");
const errorimage = require("@/assets/img/image_placeholder.jpg");
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 2,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
