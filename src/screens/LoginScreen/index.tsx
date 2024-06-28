import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Input, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import IconButton from "../../components/IconButton";
import LogoButton from "../../components/LogoButton";
import TextButton from "../../components/TextButton";
import { WebViewStyle } from "../../shared/styles";
import { RootDrawerParamList } from "../../shared/types";
import { generateSpacing } from "../../util/spacing-util";
import { styles } from "./styles";

export default function Login() {
  const drawerNavigation =
    useNavigation<DrawerNavigationProp<RootDrawerParamList>>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPress = () => {
    console.log("Login pressed");
  };

  const onSignUpPress = () => {
    drawerNavigation.navigate("Signup");
  };

  const onContinueAsGuestPress = () => {
    drawerNavigation.navigate("Search");
  };

  const onForgotPasswordPress = () => {
    console.log("Forgot password pressed");
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, WebViewStyle]}>
      <IconButton
        containerStyle={{ marginRight: "auto" }}
        onPress={() => drawerNavigation.openDrawer()}
        appearance="ghost"
        icon="menu-outline"
        iconDimensions={{ width: 20, height: 20 }}
      />
      <LogoButton scale={1.2} disabled />
      <View style={styles.section}>
        <View style={{ alignItems: "center", gap: generateSpacing(0.5) }}>
          <Text category="h6">Welcome back!</Text>
          <Text category="p1" style={styles.grayText}>
            Ready to book your next fresh cut?
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            gap: generateSpacing(0.5),
          }}
        >
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
          />
        </View>
        <TextButton
          style={styles.button}
          status="primary"
          onPress={onLoginPress}
          // disabled={email === "" || password === ""}
        >
          Log in
        </TextButton>
      </View>
      <View style={styles.section}>
        <Text style={styles.grayText}>
          {`New here?\nSign up now for easy bookings.`}
        </Text>
        <TextButton
          style={styles.button}
          status="basic"
          onPress={onSignUpPress}
        >
          Sign Up
        </TextButton>
      </View>
      <View style={styles.section}>
        <TextButton
          style={styles.button}
          fontFamily="LeagueSpartan_400Regular"
          appearance="ghost"
          onPress={onContinueAsGuestPress}
        >
          Continue as a guest
        </TextButton>
        <TextButton
          style={styles.button}
          appearance="ghost"
          fontFamily="LeagueSpartan_400Regular"
          onPress={onForgotPasswordPress}
        >
          Forgot password?
        </TextButton>
      </View>
    </ScrollView>
  );
}
