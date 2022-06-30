import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, Button } from "react-native";
import colors from "../config/colors";
import Screen from "../comp/Screen";
import Card from "../comp/Card";
import route from "../navigation/route";
import listingsApi from "../api/listings";
import AppText from "../comp/AppText";
import AppButton from "../comp/AppButton";
import ActivityIndicator from "../comp/ActivityIndicator";
import useApi from "../hooks/useApi";

export default function ListingsScreen({ navigation }) {
  const [loading, setLoading] = useState(false)
  const [listings, setListings] = useState([])
  const [error, setError] = useState(false)

  const loadListings = async () => {

    setLoading(true)
    const response = await listingsApi.getListings()
    setLoading(false)
    if (!response.ok) return setError(true)

    setError(false)

    setListings(response.data)
  }
  useEffect(() => { loadListings() }, [])

  return (
    <Screen style={styles.screen}>

      <View style={{ position: 'relative' }}>
        {error && (<>

          <AppText>couldn,t retrieve the listings.</AppText>

          <Button
            title='Retry'
            onPress={loadListings}

          />
        </>)}
      </View>

      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            thumbnailUrl={item.images[0].thumbnailUrl}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(route.LISTING_DETAILS, item)}

          />
        )}
      />
    </Screen>

  );
}

const styles = StyleSheet.create({

  screen: {

    paddingLeft: 5,
    backgroundColor: colors.light,
    padding: 10
  }

})
