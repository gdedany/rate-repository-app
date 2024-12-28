import Input from "./Input";
import Button from "./Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { View, StyleSheet } from "react-native";
import useCreateUser from "../hooks/useCreateUser";
import useSignIn from "../hooks/useSignIn";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { useEffect } from "react";
import useAuthStorage from "../hooks/useAuthStorage";
const styles = StyleSheet.create({
  container: {
    margin: 10,
    gap: 10,
    padding: 5,
  },
});
const initialValues = {
  username: "",
  password: "",
  repeatPassword: "",
};
const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "the username is too short")
    .required("username is required"),
  password: yup
    .string()
    .min(3, "the password is too short")
    .required("password is required"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not match")
    .required("password confirmation is required"),
});
const SignUp = () => {
  const authStorage = useAuthStorage();
  const navigate = useNavigate();
  const apolloClient = useApolloClient();
  const [createUser, result] = useCreateUser();
  const [signIn, signInResult] = useSignIn();
  const onSubmit = async () => {
    await createUser({
      username: formik.values.username,
      password: formik.values.password,
    });
  };
  useEffect(() => {
    if (result.data) {
      signIn({
        username: formik.values.username,
        password: formik.values.password,
      });
    }
  }, [result.data]);
  useEffect(() => {
    if (signInResult.data) {
      const token = signInResult.data.authenticate.accessToken;
      authStorage.setAccessToken(token);
      apolloClient.resetStore();
      navigate("/");
    }
  }, [signInResult.data]);
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  return (
    <View style={styles.container}>
      <Input
        error={formik.errors.username}
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        placeholder="username"
      />
      <Input
        error={formik.errors.password}
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        placeholder="password"
        secureTextEntry
      />
      <Input
        error={formik.errors.repeatPassword}
        value={formik.values.repeatPassword}
        onChangeText={formik.handleChange("repeatPassword")}
        placeholder="repeat password"
        secureTextEntry
      />
      <Button onPress={formik.handleSubmit} text={"Sign Up"} />
    </View>
  );
};
export default SignUp;
