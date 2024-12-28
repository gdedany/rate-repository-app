import { gql } from "@apollo/client";
import { REPOSITORY_DETAILS } from "./fragments";
export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      after: $after
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const GET_REPOSITORY_BY_ID = gql`
  query getRepositoryUrl($first: Int, $after: String, $repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoryDetails
      reviews(after: $after, first: $first) {
        pageInfo {
          startCursor
          endCursor
          hasNextPage
        }
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const ME = gql`
  query Me {
    me {
      username
      id
    }
  }
`;

export const MY_REVIEWS = gql`
  query myReviews {
    me {
      reviews {
        edges {
          node {
            id
            text
            rating
            repository {
              name
              ownerName
            }
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
