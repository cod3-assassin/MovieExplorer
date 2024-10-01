import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from "../screens/Homescreen";
import MoviesScreen from "../screens/MoviesScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigationComp() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#3E4A89",
        },
        tabBarActiveTintColor: "#FFD700",
        tabBarInactiveTintColor: "#AAB6E3",
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={Homescreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MoviesTab"
        component={MoviesScreen}
        initialParams={{ showAllMovies: true }}
        options={{
          title: "Movies",
          tabBarIcon: ({ color }) => (
            <Ionicons name="film" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
