import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

// Import your screen components here
import Login from "../../screens/LoginScreen";
import Signup from "../../screens/SignupScreen";
import SearchNavigator from "../SearchNavigator";
import DrawerContent from "./content";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        swipeEnabled: false,
        headerShown: false,
        unmountOnBlur: true,
      }}
    >
      <Drawer.Screen name="Search" component={SearchNavigator} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Signup" component={Signup} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
