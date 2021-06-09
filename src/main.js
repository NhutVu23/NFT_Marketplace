
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router";
import Chart from 'vue2-frappe'

import MaterialKit from "./plugins/material-kit";

Vue.config.productionTip = false;

Vue.use(MaterialKit);
Vue.use(Chart)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
