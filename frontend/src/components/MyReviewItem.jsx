import { View, StyleSheet, Alert } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { parseDate } from "../utils/misc";
import Button from "./Button";
import UseDeleteReview from "../hooks/useDeleteReview";

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: theme.colors.primary,

    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.subheading,
  },
});

const MyReviewItem = ({ item }) => {
  const [deleteReview, result] = UseDeleteReview();
  const deleteHandler = async () => {
    Alert.alert(
      "Are you sure?",
      "This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK",
          onPress: async () => {
            await deleteReview(item.id);
          },
        },
      ],
      { cancelable: true }
    );
  };
  return (
    <View style={theme.containers.standardContainer}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View style={styles.container}>
          <Text style={styles.text}>{item.rating}</Text>
        </View>
        <View style={{ flexDirection: "column", flex: 1, gap: 5 }}>
          <View>
            <Text fontSize={"subheading"} fontWeight={"bold"}>
              {item.repository.ownerName}/{item.repository.name}
            </Text>
            <Text color={"textSecondary"} fontWeight={"bold"}>
              {parseDate(item.createdAt)}
            </Text>
          </View>
          <Text>{item.text}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          justifyContent: "space-between",
        }}
      >
        <Button text="View repository" />
        <Button
          onPress={deleteHandler}
          dangerStyle={true}
          text="Delete review"
        />
      </View>
    </View>
  );
};
export default MyReviewItem;
