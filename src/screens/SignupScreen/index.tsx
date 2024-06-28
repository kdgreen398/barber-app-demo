import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Input, Text, useTheme } from "@ui-kitten/components";
import React, { useState } from "react";
import { ScrollView, Switch, View } from "react-native";
import IconButton from "../../components/IconButton";
import LogoButton from "../../components/LogoButton";
import TextButton from "../../components/TextButton";
import { WebViewStyle } from "../../shared/styles";
import { RootDrawerParamList } from "../../shared/types";
import { generateSpacing } from "../../util/spacing-util";
import { styles } from "./styles";

export default function Login() {
  const theme = useTheme();
  const drawerNavigation =
    useNavigation<DrawerNavigationProp<RootDrawerParamList>>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const onLoginPress = () => {
    drawerNavigation.navigate("Login");
  };

  const onSignUpPress = () => {
    console.log("Sign up pressed");
  };

  const onContinueAsGuestPress = () => {
    drawerNavigation.navigate("Search");
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
          <Text category="h6">Ready to increase your clientele?</Text>
          <Text category="p1" style={styles.grayText}>
            Sign up below to get started!
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            gap: generateSpacing(0.5),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: generateSpacing(0.5),
            }}
          >
            <Input
              placeholder="First Name"
              value={email}
              onChangeText={setEmail}
              style={{ flex: 1, ...styles.input }}
            />
            <Input
              placeholder="Last Name"
              value={email}
              onChangeText={setEmail}
              style={{ flex: 1, ...styles.input }}
            />
          </View>
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
          onPress={onSignUpPress}
        >
          Sign Up
        </TextButton>
      </View>
      <View style={styles.section}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: generateSpacing(2),
          }}
        >
          <Text style={styles.grayText}>Are you a barber?</Text>

          <Switch
            value={checked}
            onValueChange={setChecked}
            trackColor={{
              false: theme["color-basic-200"],
              true: theme["color-primary-500"],
            }}
          />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.grayText}>Already have an account?</Text>
        <TextButton style={styles.button} status="basic" onPress={onLoginPress}>
          Log in
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
      </View>
    </ScrollView>
  );
}
