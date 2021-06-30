export const GlobalStore = {
  namespaced: true,
  state: {
    loading: false,
    loadingModal: {
      isShow: false,
      title: "Authorizing your account for this order...",
      description:
        "If a signature request pops up, just click 'Sign' to verify that you own your wallet",
      image: null,
    },
    currentLang: "",
    walletAddress: "",
  },
  actions: {
    setLoading: ({ commit }, loading) => {
      commit("SET_LOADING", loading);
    },
    setLoadingModal: ({ commit }, loading) => {
      commit("SET_LOADING_MODAL", loading);
    },
    setLang: ({ commit }, currentLang) => {
      commit("SET_LANG", currentLang);
    },
  },
  mutations: {
    SET_LOADING(state, data) {
      state.loading = data;
    },
    SET_LOADING_MODAL(state, data) {
      state.loadingModal.isShow = data;
    },
    SET_LANG(state, data) {
      state.currentLang = data;
    },
  },
};
