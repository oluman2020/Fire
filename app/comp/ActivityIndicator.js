import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

export default function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
   
      <LottieView
        autoPlay
        loop
        source={require("../assets/animation/8552-loading-circle.json")}
      />
    
  );
}

