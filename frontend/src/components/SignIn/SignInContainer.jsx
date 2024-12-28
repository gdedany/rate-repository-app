import { View, TextInput, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "../Button";
import Input from "../Input";
const initialValues = {
  username: "",
  password: "",
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 5,
  },
});
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

const LoginForm = ({ onSubmit }) => {
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

      <Button
        onPress={formik.handleSubmit}
        dangerStyle={false}
        text="Sign In"
      />
    </View>
  );
};
export default LoginForm;
