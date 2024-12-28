import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";
const useRepositories = (sortingParams = {}) => {
  const { data, loading, fetchMore, refetch, ...result } = useQuery(
    GET_REPOSITORIES,
    {
      fetchPolicy: "cache-and-network",
      variables: { ...sortingParams },
    }
  );

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...sortingParams,
      },
    });
  };
  return {
    data: data || {},
    fetchMore: handleFetchMore,
    loading,
    refetch,
    ...result,
  };
};

export default useRepositories;
