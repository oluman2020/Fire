import { DefaultTheme } from "@react-navigation/native";
import Colors from "../config/colors";
export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.secondary,
    background: Colors.white,
  },
};
