import * as yup from "yup";
import { useFormik } from "formik";

import { View, StyleSheet } from "react-native";
import Input from "./Input";
import Button from "./Button";
import useCreateReview from "../hooks/useCreateReview";
import { useNavigate } from "react-router-native";
import { useEffect } from "react";
const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("owner is required"),
  repositoryName: yup.string().required("repository name is required"),
  rating: yup
    .number()
    .min(0, "rating number cannot be less than 0")
    .max(100, "rating number cannot be bigger than 100")
    .required("rating is required"),
  text: yup.string(),
});

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 5,
  },
});

const AddReviewPage = () => {
  const navigate = useNavigate();
  const [createReview, result] = useCreateReview();
  const onSubmit = async (values) => {
    console.log("attaching values :", values);
    await createReview(values);
  };
  useEffect(() => {
    if (result.data) {
      const repositoryId = result.data.createReview.repositoryId;
      navigate(`/repositories/${repositoryId}`);
    }
  }, [result.data]);
  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <View style={styles.container}>
      <Input
        error={formik.errors.ownerName}
        onChangeText={formik.handleChange("ownerName")}
        value={formik.values.ownerName}
        placeholder={"repository owner"}
      />

      <Input
        error={formik.errors.repositoryName}
        onChangeText={formik.handleChange("repositoryName")}
        value={formik.values.repositoryName}
        placeholder={"repository name"}
      />
      <Input
        error={formik.errors.rating}
        onChangeText={formik.handleChange("rating")}
        value={formik.values.rating}
        placeholder={"rating"}
      />
      <Input
        error={formik.errors.text}
        onChangeText={formik.handleChange("text")}
        value={formik.values.text}
        placeholder={"review"}
      />

      <Button onPress={formik.handleSubmit} text="create a review" />
    </View>
  );
};
export default AddReviewPage;
