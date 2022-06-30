import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache"

import defaultStyles from "../config/styles";
import AppText from "./AppText";

function Card({ title, subTitle, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    overflow: "hidden",
    padding: 25,
    marginTop: 5,
    backgroundColor: defaultStyles.color.white,
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: 300,
    borderRadius: 25,
  },
  subTitle: {
    color: defaultStyles.color.secondary,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
  },
});

export default Card;
