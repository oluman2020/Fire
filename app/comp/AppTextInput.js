import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

export default function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      <MaterialCommunityIcons
        name={icon}
        size={30}
        color={defaultStyles.color.medium}
        style={styles.icon}
      />
      <TextInput
        placeholderTextColor={defaultStyles.color.medium}
        style={[defaultStyles.text,{ flex:1 }]}
        {...otherProps}
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.color.light,
    padding: 25,
    borderRadius: 25,
    marginVertical: 10,
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
  },
});
