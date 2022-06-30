import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import Screen from "../comp/Screen";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../comp/Form";
import CategoryPickerItem from "../comp/CategoryPickerItem";
import FormImagePicker from "../comp/FormImagePicker";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "red",
    icon: "table-furniture",
  },
  { label: "Clothing", value: 2, backgroundColor: "yellow", icon: "hanger" },
  { label: "Games", value: 4, backgroundColor: "green", icon: "gamepad" },
  { label: "Housing", value: 5, backgroundColor: "brown", icon: "home-group" },
  { label: "Sport", value: 6, backgroundColor: "indigo", icon: "basketball" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "violet",
    icon: "movie-search",
  },
  { label: "Books", value: 8, backgroundColor: "orange", icon: "bookshelf" },
  {
    label: "Camera",
    value: 9,
    backgroundColor: "lightblue",
    icon: "camera-wireless",
  },
  {
    label: "Others",
    value: 10,
    backgroundColor: "lightgreen",
    icon: "set-center",
  },
];

export default function ListingsEditScreen() {
  const location = useLocation();

  const [uploadVisible, setUploadVsiible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVsiible(true);

    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVsiible(false);
      return alert("Could not save the listings");
    }

    resetForm();
  };

  return (
    <ScrollView style={styles.cont}>
      <Screen style={styles.container}>
        <UploadScreen
          onDone={() => setUploadVsiible(false)}
          progress={progress}
          visible={uploadVisible}
        />
        <AppForm
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
            images: [],
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormImagePicker name="images" />
          <AppFormField maxLength={255} name="title" placeholder="Title" />
          <AppFormField
            keyboardType="numeric"
            maxLength={8}
            name="price"
            placeholder="Price"
            width={120}
          />
          <AppFormPicker
            items={categories}
            numberOfColums={3}
            name="category"
            placeholder="Category"
            width="50%"
            PickerItemComponent={CategoryPickerItem}
          />
          <AppFormField
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Description"
          />
          <SubmitButton title="Post" />
        </AppForm>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 50,
  },
  cont: {
    marginTop: 50,
  },
});
