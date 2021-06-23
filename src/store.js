import Vue from "vue";
import Vuex from "vuex";
import { GlobalStore } from "./store/GlobalStore";
import { UserStore } from "./store/UserStore";
import { CategoryStore } from "./store/CategoryStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global: GlobalStore,
    user: UserStore,
    category: CategoryStore,
  },
});
