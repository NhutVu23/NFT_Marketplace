import { apolloClient } from "../utils/ApolloClient";
import { EDIT_USER, LOGIN_USER } from "./graphql/user/mutation";
import { GET_ALL_USER } from "./graphql/user/query";
import { Request } from "../utils/Request";
import Web3 from "web3";
import { failAlert } from "../utils/ComponentUtils";

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
        const netID = state.web3.utils.hexToNumber(window.ethereum.chainId); //User MetaMask's current status
        if (netID != 3) {
          await dispatch("logoutUser");

          failAlert({
            text: "CURRENT WEB WORKING WITH TESTNET ROPSTEN",
          });
          return;
        }
        
        if (err != null || !accounts || accounts.length == 0) {
          // console.log("logoutUser");
          await dispatch("logoutUser");
        } else if (
          !state.information ||
          state.information.wallet_address != accounts[0]
        ) {
          // console.log("loginUser");
          await dispatch("loginUser", accounts[0]);
        }
      });
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
