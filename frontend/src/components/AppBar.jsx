import { View, StyleSheet, ScrollView } from "react-native";
import AppBarTab from "./AppBarTab";
import Constants from "expo-constants";
import theme from "../theme";
import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
import { useApolloClient } from "@apollo/client";
import useAuthStorage from "../hooks/useAuthStorage";
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    flexDirection: "row",
  },
});

const AppBar = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const { data, loading, error } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
  });
  const logout = () => {
    apolloClient.resetStore();
    authStorage.removeAccessToken();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {!data?.me && <AppBarTab label="Sign In" path="/signin" />}
        {data?.me && (
          <AppBarTab label="Sign Out" callback={logout} path="/signin" />
        )}
        <AppBarTab label="Repositories" path="/" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
