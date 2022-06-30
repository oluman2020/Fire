import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../AppText/AppText";

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <AppText style={styles.errorcolor}>{error}</AppText>;
}

const styles = StyleSheet.create({
  errorcolor: {
    color: "red",
  },
});
