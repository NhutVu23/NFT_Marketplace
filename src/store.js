import Vue from "vue";
import Vuex from "vuex";
import { GlobalStore } from "./store/GlobalStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global: GlobalStore,
  },
});
