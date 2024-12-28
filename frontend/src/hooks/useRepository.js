import { useQuery } from "@apollo/client";
import { GET_REPOSITORY_BY_ID } from "../graphql/queries";

const useRepository = (params) => {
  const { data, loading, fetchMore, ...result } = useQuery(
    GET_REPOSITORY_BY_ID,
    {
      fetchPolicy: "cache-and-network",
      variables: { ...params },
    }
  );

  const handleFetchMore = async () => {
    const canFetchMore =
      !loading && data?.repository?.reviews?.pageInfo?.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    try {
      const fetchMoreResult = await fetchMore({
        variables: {
          after: data.repository.reviews.pageInfo.endCursor,
          ...params,
        },
      });

      console.log(
        "FetchMore Result:",
        fetchMoreResult.data.repository.reviews.pageInfo.endCursor
      );
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  return {
    data: data || {},
    loading,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useRepository;
