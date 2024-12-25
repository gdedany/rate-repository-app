import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import theme from "../theme";
import RepositoryMetricItem from "./RepositoryMetricItem";
const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 10,
    padding: 10,
    gap: 20,
  },
  rowContainer: {
    gap: 20,
    flexDirection: "row",
  },
  metricsContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  languageItem: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    color: theme.colors.textWhite,
    padding: 5,
    borderRadius: 3,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image
          source={{ uri: item.ownerAvatarUrl }}
          style={{ width: 52, height: 52, borderRadius: 10 }}
        />
        <View style={{ flex: 1, gap: 5 }}>
          <Text fontSize={"heading"}>{item.fullName}</Text>

          <Text fontSize={"subheading"} color={"textSecondary"}>
            {item.description}
          </Text>
          <Text fontSize={"subheading"} style={styles.languageItem}>
            {item.language}
          </Text>
        </View>
      </View>
      <View style={styles.metricsContainer}>
        <RepositoryMetricItem label={"Stars"} count={item.stargazersCount} />
        <RepositoryMetricItem label={"Forks"} count={item.forksCount} />
        <RepositoryMetricItem label={"Reviews"} count={item.ratingAverage} />
        <RepositoryMetricItem label={"Rating"} count={item.reviewCount} />
      </View>
    </View>
  );
};

export default RepositoryItem;
