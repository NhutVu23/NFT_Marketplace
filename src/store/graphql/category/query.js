import gql from "graphql-tag";

export const GET_CATEGORY = gql`
  query(
    $skip: Int
    $limit: Int
    $keySearch: String
    $keyName: String
    $order: String
    $sortBy: String
    $profileKey: String
    $isDiscardProfile: Boolean
    $isDiscardGroup: Boolean
    $groupKey: String
    $activeKey: Boolean
  ) {
    getListCategory(
      skip: $skip
      limit: $limit
      keySearch: $keySearch
      keyName: $keyName
      order: $order
      sortBy: $sortBy
      profileKey: $profileKey
      isDiscardProfile: $isDiscardProfile
      isDiscardGroup: $isDiscardGroup
      groupKey: $groupKey
      activeKey: $activeKey
    ) {
      name
      description
      short_url
      image
      created_at
      updated_at
    }
  }
`;
