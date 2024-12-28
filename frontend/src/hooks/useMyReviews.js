import { useQuery } from "@apollo/client";
import { MY_REVIEWS } from "../graphql/queries";
import { cache } from "react";

const useMyReviews = () => {
  const { data, loading, error, refetch } = useQuery(MY_REVIEWS, {
    fetchPolicy: "cache-and-network",
  });
  return { data: data || {}, loading, error, refetch };
};
export default useMyReviews;
