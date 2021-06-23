import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation($wallet_address: String!) {
    checkExistUser(wallet_address: $wallet_address) {
      id
      wallet_address
      wallet_name
      email
      full_name
      bio
      custom_url
      avatar
      banner_img
      created_at
      updated_at
      list_collections
    }
  }
`;

export const EDIT_USER = gql`
  mutation($wallet_address: String!, $user: JSON) {
    update(wallet_address: $wallet_address, user: $user) {
      id
      wallet_address
      wallet_name
      email
      full_name
      bio
      custom_url
      avatar
      banner_img
      created_at
      updated_at
      list_collections
      socials {
        facebook
        website
        twitter
        instagram
        medium
      }
    }
  }
`;
