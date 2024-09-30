import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Homescreen from "./Components/screens/Homescreen";
import MoviesScreen from "./Components/screens/MoviesScreen";
import MovieDetailScreen from "./Components/screens/MovieDetailScreen"; // Fix the typo in your import
import FavouriteScreen from "./Components/screens/FavouriteScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouriteContextProvider from "./Components/Context/favourite-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  // Drawer Navigator
  function DrawerNavigation() {
    return (
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#3E4A89", // Drawer background color
            width: 240,
          },
          drawerActiveBackgroundColor: "#4e4376", // Active item background color
          drawerActiveTintColor: "#ffffff", // Active item text color
          drawerInactiveTintColor: "#AAB6E3", // Inactive item text color
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Homescreen}
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

  // Main App Navigator
  return (
    <>
      <StatusBar style="dark" />
      <FavouriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigation}
              options={({ navigation }) => ({
                headerShown: false,
              })}
            />
            <Stack.Screen
              name="Movies"
              component={MoviesScreen}
              options={{
                title: "Movie Explorer",
                headerStyle: styles.header,
                headerTitleStyle: styles.headerTitle,
                headerTintColor: "#FFFFFF",
              }}
            />
            <Stack.Screen
              name="MovieDetails"
              component={MovieDetailScreen}
              options={{
                title: "About the Movie",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#3E4A89",
    height: 100, // Adjust this value to match the Homescreen header
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center", // Center items vertically
    paddingTop: 20, // Adjust top padding to create consistent spacing
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1, // To center the title
  },
});
