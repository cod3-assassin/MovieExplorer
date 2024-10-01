import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouriteScreen from "../screens/FavouriteScreen";
import CustomDrawerContent from "./CustomDrawerContent";
import TabNavigationComp from "./TabNavigation";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#3E4A89",
          width: 240,
        },
        drawerActiveBackgroundColor: "#4e4376",
        drawerActiveTintColor: "#ffffff",
        drawerInactiveTintColor: "#AAB6E3",
        drawerItemStyle: {
          borderRadius: 10,
          marginVertical: 5,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigationComp}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Ionicons name="star" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
