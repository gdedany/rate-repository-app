import { CREATE_REVIEW } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async (review) => {
    mutate({
      variables: { review: { ...review, rating: Number(review.rating) } },
    });
  };

  return [createReview, result];
};

export default useCreateReview;
