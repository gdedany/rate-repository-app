import Constants from "expo-constants";
import { StyleSheet, View, StatusBar } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import theme from "../theme";
import { Route, Routes, Navigate } from "react-router-native";
import SignIn from "./SignIn";
import RepositoryPage from "./RepositoryList/RepositoryPage";
import AddReviewPage from "./AddReviewPage";
import SignUp from "./SignUp";
import { useEffect } from "react";
import MyReviews from "./MyReviews";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/reviews/add" element={<AddReviewPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/my-reviews" element={<MyReviews />} />
        <Route path="/repositories/:id" element={<RepositoryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
