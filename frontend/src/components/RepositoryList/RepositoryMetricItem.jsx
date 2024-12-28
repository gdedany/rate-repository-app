import { View, StyleSheet } from "react-native";
import Text from "../Text";
const styles = StyleSheet.create({
  container: {
    gap: 5,
    alignItems: "center",
  },
});

const RepositoryMetricItem = ({ label, count }) => {
  const adjustedCount =
    count > 999 ? `${Number.parseFloat(count / 1000).toFixed(1)}k` : count;
  return (
    <View style={styles.container}>
      <Text fontWeight={"bold"}>{adjustedCount}</Text>
      <Text color={"textSecondary"}>{label}</Text>
    </View>
  );
};
export default RepositoryMetricItem;
