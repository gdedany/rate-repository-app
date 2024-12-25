import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import Text from "./Text";
import theme from "../theme";

const initialValues = {
  username: "",
  password: "",
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
});

const styles = StyleSheet.create({
  container: {
    margin: 10,
    gap: 10,
  },
  errorInput: {
    borderColor: theme.colors.danger,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: theme.colors.textSecondary,
    height: 40,
  },
  button: {
    borderRadius: 10,
    color: theme.colors.textWhite,
    padding: 10,
    backgroundColor: theme.colors.primary,
  },
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log("values :", formik.values);

    formik.resetForm();
  };
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          formik.errors.username && formik.touched.username
            ? styles.errorInput
            : null,
        ]}
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        placeholder="username"
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: theme.colors.danger }}>
          {formik.errors.username}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          formik.errors.password && formik.touched.password
            ? styles.errorInput
            : null,
        ]}
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        placeholder="password"
        secureTextEntry
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: theme.colors.danger }}>
          {formik.errors.password}
        </Text>
      )}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text
          fontWeight={"bold"}
          style={{
            color: theme.colors.textWhite,
            textAlign: "center",
          }}
        >
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
