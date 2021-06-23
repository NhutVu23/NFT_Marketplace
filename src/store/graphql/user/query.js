import gql from "graphql-tag";

export const GET_EMPLOYEES_QUERY = gql`
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
    getEmployees(
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
      total
      items {
        id
        firstName
        lastName
        jobTitle
        phone
        active
        user {
          id
          email
        }
        permissionProfiles {
          id
          name
        }
        groups {
          id
          name
        }
        createdAt
      }
    }
  }
`;

export const GET_INVITE_USER_QUERY = gql`
  query {
    getInviteUsers {
      total
      items {
        id
        email
        jobTitle
        permissionProfile {
          id
          name
        }
        confirm
        expiredAt
        createdAt
        updatedAt
        createdBy {
          id
          firstName
          lastName
        }
      }
    }
  }
`;

export const GET_EMPLOYEE_QUERY = gql`
  query($employeeId: String!) {
    getEmployee(employeeId: $employeeId) {
      id
      firstName
      lastName
      jobTitle
      phone
      address
      active
      user {
        id
        email
      }
      permissionProfiles {
        id
        name
      }
      groups {
        id
        name
      }
    }
  }
`;
