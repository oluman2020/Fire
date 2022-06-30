import React, { useState, } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./app/navigation/rootNavigation";
import AppNavigator from "./app/navigation/AppNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import OfflineNotice from "./app/comp/OfflineNotice"
import { navigationRef } from "./app/navigation/rootNavigation";
import AuthNavigator from "./app/navigation/AuthNavigator";
import authsStorage from "./app/auths/storage"
import AuthContext from "./app/auths/context";
import jwtDecode from "jwt-decode";


export default function App() {
  const [user, setUser] = useState()
  const [ready, setIsReady] = useState(false)
  const restoreToken = async () => {
    const token = await authsStorage.getToken()
    if (!token) return
    setUser(jwtDecode(token))
  }
  if (!ready) return
  <Apploading startAsync={restoreToken} onFinish={() => setIsReady(true)} />

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
        {user ? < AppNavigator /> : < AuthNavigator />}
      </NavigationContainer>

    </AuthContext.Provider>
  );
}
