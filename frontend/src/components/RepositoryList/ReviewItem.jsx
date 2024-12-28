import { View, StyleSheet } from "react-native";
import Text from "../Text";
import theme from "../../theme";
import { parseDate } from "../../utils/misc";

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

const ReviewItem = ({ item }) => {
  return (
    <View style={theme.containers.standardContainer}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View style={styles.container}>
          <Text style={styles.text}>{item.rating}</Text>
        </View>
        <View style={{ flexDirection: "column", flex: 1, gap: 5 }}>
          <View>
            <Text fontSize={"subheading"} fontWeight={"bold"}>
              {item.user.username}
            </Text>
            <Text color={"textSecondary"} fontWeight={"bold"}>
              {parseDate(item.createdAt)}
            </Text>
          </View>
          <Text>{item.text}</Text>
        </View>
      </View>
    </View>
  );
};
export default ReviewItem;
