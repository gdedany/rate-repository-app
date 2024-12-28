import ListSeparator from "../ListSeparator";
import RepositoryItem from "./RepositoryItem";
import { FlatList, View, StyleSheet } from "react-native";

const RepositoryListContainer = ({ repositoryNodes, onEndReach }) => {
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ListSeparator}
      renderItem={RepositoryItem}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};
export default RepositoryListContainer;
