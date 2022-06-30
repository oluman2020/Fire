import React, { useState, useContext } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";
import Screen from "../comp/Screen";
import authApi from "../api/auth"
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../comp/Form";
import AuthContext from "../auths/context";
import authsStorage from "../auths/storage"


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

export default function LoginScreen() {
  const authContext = useContext(AuthContext)
  const [loginFailed, setLoginFailed] = useState(false)
  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    const user = jwtDecode(result.data);
    authContext.setUser(user)
    authsStorage.storeToken(result.data)
  }
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/2AG7DDC.jpg")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="invalid email and/or password" visible={loginFailed} />
        <AppFormField
          autoCorrect={false}
          autocapitalize="none"
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
        />

        <AppFormField
          autocapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          secureTextEntry={true}
          placeholder="Password"
        />

        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 70,
  },
});
