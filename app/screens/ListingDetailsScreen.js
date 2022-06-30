import React from "react";
import {
  View,
  StyleSheet,

  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import { Image } from "react-native-expo-image-cache"
import colors from "../config/colors";
import ListItem from "../comp/ListItems";
import AppText from "../comp/AppText";
import ContactSellerForm from "../comp/ContactSellerForm";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (

    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "os" ? 0 : 100}
    >
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].url}


      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/FB_IMG_16222120462717233.jpg")}
            title="Ogunyede Olumide"
            subTitle='09073411996'
          />
        </View>
        <ContactSellerForm listing={listing} />

      </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
