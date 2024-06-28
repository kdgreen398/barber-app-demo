import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { Provider } from "react-redux";
import { AuthProvider } from "./src/context-api/auth-context";
import reduxStore from "./src/store";

import {
  LeagueSpartan_300Light,
  LeagueSpartan_400Regular,
  LeagueSpartan_600SemiBold,
  LeagueSpartan_700Bold,
  useFonts,
} from "@expo-google-fonts/league-spartan";

import {
  LibreFranklin_300Light,
  LibreFranklin_400Regular,
  LibreFranklin_600SemiBold,
  LibreFranklin_700Bold,
} from "@expo-google-fonts/libre-franklin";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";
import "./App.css";
import { mapping } from "./mapping";
import AppContainer from "./src/containers/AppContainer";
import theme, { AppColors } from "./theme";

if (Platform.OS === "web") {
  const metaTag = document.createElement("meta");
  metaTag.setAttribute("name", "viewport");
  metaTag.setAttribute(
    "content",
    "width=device-width, initial-scale=1.0, maximum-scale=1.0",
  );

  document.getElementsByTagName("head")[0].appendChild(metaTag);
}
const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // prevent layout blinking when performing navigation
    background: AppColors.night,
  },
};

export default function App() {
  useFonts({
    LeagueSpartan_300Light,
    LeagueSpartan_400Regular,
    LeagueSpartan_600SemiBold,
    LeagueSpartan_700Bold,
    LibreFranklin_300Light,
    LibreFranklin_400Regular,
    LibreFranklin_600SemiBold,
    LibreFranklin_700Bold,
  });

  return (
    <NavigationContainer theme={navigatorTheme}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        theme={theme}
        mapping={eva.mapping}
        customMapping={mapping}
      >
        <Provider store={reduxStore}>
          <AuthProvider token={null}>
            <AppContainer />
          </AuthProvider>
        </Provider>
      </ApplicationProvider>
    </NavigationContainer>
  );
}
