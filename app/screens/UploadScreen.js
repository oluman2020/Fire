import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import Colors from "../config/colors";
import LottieView from "lottie-react-native";

export default function UploadScreen({
  onDone,
  progress = 0,
  visible = false,
}) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={Colors.primary}
            width={200}
            indeterminateAnimationDuration={10000}
          />
        ) : (
          <LottieView
            loop={false}
            onAnimationFinish={onDone}
            autoPlay
            source={require("../assets/animation/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
