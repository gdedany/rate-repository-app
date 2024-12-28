import { View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../../hooks/useRepository";
import { useParams } from "react-router-native";
import SingleRepository from "./SingleRepository";
import { useEffect } from "react";
const RepositoryPage = () => {
  const params = useParams();

  const { data, fetchMore } = useRepository({
    repositoryId: params.id,
    first: 4,
  });
  const repository = data.repository;
  const onEndReach = () => {
    fetchMore();
  };

  return (
    <View style={styles.container}>
      {repository && repository?.reviews && (
        <SingleRepository
          repository={repository}
          onEndReach={onEndReach}
          reviews={repository?.reviews.edges.map((e) => e.node)}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RepositoryPage;
