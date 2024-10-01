import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigation from "./Components/Navigation/DrawerNavigationComp";
import MoviesScreen from "./Components/screens/MoviesScreen";
import MovieDetailScreen from "./Components/screens/MovieDetailScreen";
import FavouriteContextProvider from "./Components/Context/favourite-context";
import TabNavigation from "./Components/Navigation/TabNavigation"; // Import the TabNavigation

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <FavouriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {/* This is the main entry point where DrawerNavigation will be used */}
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigation}
              options={{ headerShown: false }}
            />

            {/* Add the Tabs as a new main entry screen */}
            <Stack.Screen
              name="Tabs"
              component={TabNavigation} // Use TabNavigation here
              options={{ headerShown: false }} // Hide default header, we'll design our own
            />

            {/* Other screens like Movies and MovieDetails */}
            <Stack.Screen
              name="Movies"
              component={MoviesScreen}
              options={{
                title: "Movie Explorer",
                headerStyle: {
                  backgroundColor: "#3E4A89",
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                },
                headerTitleStyle: {
                  color: "#FFFFFF",
                  fontSize: 28,
                  fontWeight: "bold",
                  textAlign: "center",
                },
                headerTintColor: "#FFFFFF",
              }}
            />

            <Stack.Screen
              name="MovieDetails"
              component={MovieDetailScreen}
              options={{ title: "About the Movie" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouriteContextProvider>
    </>
  );
}
