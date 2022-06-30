import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";

export default function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  label: {
    marginTop: 5,
  },
});
