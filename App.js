import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigation from "./Components/Navigation/DrawerNavigationComp";
import MoviesScreen from "./Components/screens/MoviesScreen";
import MovieDetailScreen from "./Components/screens/MovieDetailScreen";
import FavouriteContextProvider from "./Components/Context/favourite-context";
import TabNavigation from "./Components/Navigation/TabNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <FavouriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigation}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Tabs"
              component={TabNavigation}
              options={{ headerShown: false }}
            />

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
