import React from "react";
import {  View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Icon({
  name,
  size = 50,
  backgroundColor ="red",
  iconColor = "blue",
}) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: size,
        height: size,
        backgroundColor,
        borderRadius: size / 2,
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
}
