import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;
export const SIGN_UP = gql`
  mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      username
      id
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation DeleteReview($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      text
      repositoryId
      rating
      id
      createdAt
    }
  }
`;
