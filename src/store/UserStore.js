import { apolloClient } from "../utils/ApolloClient";
import { EDIT_USER, LOGIN_USER } from "./graphql/user/mutation";
import { GET_ALL_USER } from "./graphql/user/query";
import { handleError, Request } from "../utils/Request";
import Web3 from "web3";

export const UserStore = {
  namespaced: true,
  state: {
    information: null,
    web3: null,
    ETHRate: 0,
  },

  actions: {
    getAllUsers: ({ commit }) => {
      return apolloClient
        .mutate({
          mutation: GET_ALL_USER,
        })
        .then(({ data }) => data.getAllUsers);
    },
    editProfile: ({ commit }, data) => {
      return apolloClient
        .mutate({
          mutation: EDIT_USER,
          variables: data,
        })
        .then(({ data }) => {
          let currentUser = data.updateProfile;
          commit("SET_USER", currentUser);
          localStorage.setItem("metaMaskAddress", currentUser.wallet_address);
        });
    },
    getETHRate: ({ commit }) => {
      return Request()
        .get(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        )
        .then((res) => {
          commit("SET_ETH_RATE", res.data.ethereum.usd);
        });
    },
    loginUser: ({ commit, dispatch }, data) => {
      const result = apolloClient
        .mutate({
          mutation: LOGIN_USER,
          variables: {
            wallet_address: data,
          },
        })
        .then(({ data }) => {
          if (data) {
            let currentUser = data.checkExistUser;
            commit("SET_USER", currentUser);
            localStorage.setItem("metaMaskAddress", currentUser.wallet_address);
            dispatch("getETHRate");
            dispatch("loginMetamask");
          }
        });
    },
    logoutUser: ({ commit }) => {
      commit("SET_USER", null);
    },
    checkAccounts: async ({ dispatch, state }) => {
      if (state.web3 === null) return;
      await state.web3.eth.getAccounts(async (err, accounts) => {
        if (err != null || !accounts || accounts.length == 0) {
          await dispatch("logoutUser");
        } else if (
          !state.information ||
          state.information.wallet_address != accounts[0]
        ) {
          await dispatch("loginUser", accounts[0]);
        }
        await dispatch("checkNetWork");
      });
    },
    checkNetWork: ({ commit, state }) => {
      const netID = state.web3.utils.hexToNumber(window.ethereum.chainId); //User MetaMask's current status
      // if (state.information && state.information.wallet_address !== "") {
      //   if (netID === 1) return "MAINNET";
      //   if (state.information.wallet_address !== "" && netID === 3)
      //     return "ROPSTEN";
      //   if (state.information.wallet_address !== "" && netID === 42)
      //     return "LOVAN";
      //   if (state.information.wallet_address !== "" && netID === 4)
      //     return "RINKEBY";
      //   if (state.information.wallet_address !== "" && netID === 97)
      //     return "BSC";
      //   if (state.information.wallet_address !== "") return "MAINNET";
      // }
    },
    loginMetamask: async ({ dispatch, state }) => {
      if (window.ethereum) {
        state.web3 = new Web3(ethereum);
        await ethereum.enable();
        await dispatch("checkAccounts");
      } else if (window.web3) {
        state.web3 = new Web3(web3.currentProvider);
        await dispatch("checkAccounts");
      } else {
        state.web3 = null;
      }

      return state.wallet_address;
    },
  },
  mutations: {
    SET_USER(state, data) {
      state.information = data;
    },
    SET_ETH_RATE(state, data) {
      state.ETHRate = data;
    },
  },
};
