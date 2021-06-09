export const GlobalStore = {
  namespaced: true,
  state: {
    loading: false,
    currentLang: "",
    walletAddress: "",
  },
  actions: {
    setLoading: ({ commit }, loading) => {
      commit("SET_LOADING", loading);
    },
    setLang: ({ commit }, currentLang) => {
      commit("SET_LANG", currentLang);
    },
    setAddress: ({ commit }, currentLang) => {
      commit("SET_ADDRESS", currentLang);
    },
  },
  mutations: {
    SET_LOADING(state, data) {
      state.loading = data;
    },
    SET_LANG(state, data) {
      state.currentLang = data;
    },
    SET_ADDRESS(state, data) {
      state.walletAddress = data;
    },
  },
};
