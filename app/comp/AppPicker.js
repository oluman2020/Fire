import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Button,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

export default function AppPicker({
  icon,
  items,
  selectedItem,
  numberOfColumns,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  width = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={30}
            color={defaultStyles.color.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Screen>
        <Modal visible={modalVisible} animationType="slide">
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Modal>
      </Screen>
    </>
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
  text: {
    flex: 1,
  },
  placeholder: {
    color: defaultStyles.color.medium,
    flex: 1,
  },
});
