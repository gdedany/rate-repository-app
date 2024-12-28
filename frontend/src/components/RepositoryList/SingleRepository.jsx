import { FlatList, View, StyleSheet } from "react-native";
import ListSeparator from "../ListSeparator";
import ReviewItem from "./ReviewItem";
import RepositoryItem from "./RepositoryItem";

const SingleRepository = ({ repository, reviews, onEndReach }) => {
  return (
    <View>
      <FlatList
        data={reviews}
        ListHeaderComponent={
          <RepositoryItem isInList={false} item={repository} />
        }
        ItemSeparatorComponent={ListSeparator}
        renderItem={ReviewItem}
        onEndReached={onEndReach}
        onEndReachedThreshold={0}
      />
    </View>
  );
};

export default SingleRepository;
