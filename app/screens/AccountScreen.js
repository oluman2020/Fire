import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItems from "../comp/ListItems";
import Screen from "../comp/Screen";
import colors from "../config/colors";
import Icon from "../comp/Icon";
import ListItemSeparator from "../comp/ListItemSeparator";
import Colors from "../config/colors";
import AuthContext from "../auths/context";
import authsStorage from "../auths/storage"
const menuItems = [
  {
    title: "My listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: Colors.secondary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: Colors.primary,
    },
    targetScreen: "Messages",
  },
];
export default function AccountScreen({ navigation }) {
  const handleLogout = () => {
    setUser(null)
    authsStorage.removeToken()
  }
  const { user, setUser } = useContext(AuthContext)
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItems
          title={user.name}
          subTitle={user.email}
          image={require("../assets/tunde.jpg")}
        />
      </View>
      <View>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItems
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
       
        />
      </View>

      <View>
        <ListItems
          title="Log out"
          IconComponent={
            <Icon name="logout" backgroundColor={colors.primary} />
          }
          onPress={handleLogout}

        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "lightgray",
  },
  container: {
    marginVertical: 5,
  },
});
