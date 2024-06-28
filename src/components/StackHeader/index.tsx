import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Layout, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootDrawerParamList } from "../../shared/types";
import { generateSpacing } from "../../util/spacing-util";
import IconButton from "../IconButton";
import LogoButton from "../LogoButton";
import StyleSheet from "./styles";
import { StackHeaderProps } from "./types";

export default function StackHeader({
  showBack = false,
  showLogo = false,
  showMenu = false,
  title,
}: StackHeaderProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const drawerNavigation =
    useNavigation<DrawerNavigationProp<RootDrawerParamList>>();

  return (
    <Layout
      style={{
        ...StyleSheet.header,
        paddingTop: insets.top || generateSpacing(2),
        borderBottomColor: theme["color-basic-700"],
      }}
    >
      {showBack && (
        <IconButton
          appearance="ghost"
          containerStyle={{ marginRight: "auto" }}
          onPress={() => drawerNavigation.goBack()}
          icon="chevron-left-outline"
        />
      )}
      {showLogo && <LogoButton scale={0.8} />}
      {showMenu && (
        <IconButton
          containerStyle={{ marginLeft: "auto" }}
          onPress={() => drawerNavigation.openDrawer()}
          appearance="ghost"
          icon="menu-outline"
          iconDimensions={{ width: 20, height: 20 }}
        />
      )}
      {title && (
        <Text category="h4" style={{ textAlign: "center" }}>
          {title}
        </Text>
      )}
    </Layout>
  );
}
