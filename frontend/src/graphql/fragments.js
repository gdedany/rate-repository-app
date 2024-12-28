import { gql } from "@apollo/client";

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    url
    description
    forksCount
    fullName
    language
    id
    name
    ownerAvatarUrl
    ratingAverage
    reviewCount
    stargazersCount
  }
`;
