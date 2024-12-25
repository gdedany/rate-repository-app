import { View, StyleSheet, ScrollView } from "react-native";
import AppBarTab from "./AppBarTab";
import Constants from "expo-constants";
import theme from "../theme";
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab label="Sign In" path="/signin" />
        <AppBarTab label="Repositories" path="/" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
