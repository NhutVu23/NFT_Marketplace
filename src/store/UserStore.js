import { apolloClient } from "../utils/ApolloClient";
import { EDIT_USER, LOGIN_USER } from "./graphql/user/mutation";

export const UserStore = {
  namespaced: true,
  state: {
    user: null,
  },
  actions: {
    editProfile: ({}, data) => {
      return apolloClient
        .mutate({
          mutation: EDIT_USER,
          variables: data,
        })
        .then(({ data }) => data.editProfile);
    },
    loginUser: ({}, data) => {
      return apolloClient
        .mutate({
          mutation: LOGIN_USER,
          variables: data,
        })
        .then(({ data }) => {
          let currentUser = data.loginUser;

          commit("SET_USER", currentUser);
        });
    },
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data;
    },
  },
};
