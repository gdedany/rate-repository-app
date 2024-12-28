import { useEffect } from "react";
import useMyReviews from "../hooks/useMyReviews";
import ListSeparator from "./ListSeparator";
import ReviewItem from "./RepositoryList/ReviewItem";
import { View, FlatList } from "react-native";
import MyReviewItem from "./MyReviewItem";

const MyReviews = () => {
  const { data, loading, error, refetch } = useMyReviews();
  const me = data.me;
  return (
    <View>
      <FlatList
        data={me ? me.reviews.edges.map((r) => r.node) : []}
        ItemSeparatorComponent={ListSeparator}
        renderItem={({ item }) => <MyReviewItem item={item} />}
      />
    </View>
  );
};
export default MyReviews;
