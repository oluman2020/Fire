import { useEffect } from "react";
import * as Notifications from "expo-notifications";

import expoPushTokensApi from "../api/expoPushTokens";
import navigation from "../navigation/rootNavigation";

export default useNotifications = () => {
  useEffect(() => {
    registerForPushNotifications();
    Notifications.addNotificationResponseReceivedListener((notifications) => {
      navigation.navigate("Account");
    });
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permissions = await Notifications.getPermissionsAsync();
      if (!permissions.granted) {
        const finalPermissions = await Notifications.requestPermissionsAsync();
        if (!finalPermissions.granted) {
          console.log("permissions NOT granted!");
          return;
        }
      }
      console.log("permissions granted!");

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token.data);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};
