import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../config/colors";
import AppText from "./AppText";

import { useNetInfo } from "@react-native-community/netinfo";

export default function OfflineNotice() {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}> No Internet Connection</AppText>
      </View>
    );
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: 20,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  text: {
    color: Colors.white,
  },
});
