import React, { useState } from "react";
import { FlatList } from "react-native";

import ListItems from "../comp/ListItems";
import Screen from "../comp/Screen";
import ListItemSeparator from "../comp/ListItemSeparator";
import DeleteActions from "../comp/DeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "you can contact me through the number below",
    descrption: "08105863912",
    image: require("../assets/Favour.jpeg"),
  },
  {
    id: 2,

    title: 'olumide',
    description: 'tall',
    image: require('../assets/tunde.jpg'),
  },
];

export default function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setReFreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItems
            title={item.id}
            subTitle={item.descrption}
            image={item.image}
            onPress={() => console.log("message selected ", item)}
            renderRightActions={() => (
              <DeleteActions
                onPress={() => {
                  handleDelete(item);
                }}
              />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {

              id: 2,
              title: 'olumide',
              description: 'tall',
              image: require('../assets/tunde.jpg')

              ,
            },
          ])
        }
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}
