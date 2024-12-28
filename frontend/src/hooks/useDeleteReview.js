import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";
import { MY_REVIEWS } from "../graphql/queries";

const UseDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);
  const deleteReview = async (reviewId) => {
    await mutate({
      variables: { deleteReviewId: reviewId },
      refetchQueries: [{ query: MY_REVIEWS }],
    });
  };
  return [deleteReview, result];
};

export default UseDeleteReview;
