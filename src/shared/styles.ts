import { Platform, ViewStyle } from "react-native";
import { MAX_WIDTH } from "./constant";

const isWeb = Platform.OS === "web";
export const WebViewStyle: ViewStyle = isWeb
  ? { maxWidth: MAX_WIDTH, alignSelf: "center", width: "100%" }
  : {};
