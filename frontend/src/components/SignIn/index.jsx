import SignInContainer from "./SignInContainer";
import { View, StyleSheet } from "react-native";
import useSignIn from "../../hooks/useSignIn";
import { useEffect } from "react";
import useAuthStorage from "../../hooks/useAuthStorage";
import { useNavigate } from "react-router-native";
import { useApolloClient } from "@apollo/client";

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

const SignIn = () => {
  const navigate = useNavigate();
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const [signIn, result] = useSignIn();

  useEffect(() => {
    if (result.data) {
      const token = result.data.authenticate.accessToken;
      authStorage.setAccessToken(token);
      apolloClient.resetStore();
      navigate("/");
    }
  }, [result.data]);

  const onSubmit = async (values) => {
    await signIn(values);
  };

  return (
    <View style={styles.container}>
      <SignInContainer onSubmit={onSubmit} />
    </View>
  );
};

export default SignIn;
