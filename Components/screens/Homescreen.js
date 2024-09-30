import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons"; // Import the hamburger icon
import SearchBar from "../SearchBar";
import Movies from "../Data/data.json";

const categoryIcons = {
  Action: require("../Icons/action-movie.png"),
  Adventure: require("../Icons/adventure-game.png"),
  "Sci-Fi": require("../Icons/sci-fi-plane.png"),
  Drama: require("../Icons/drama.png"),
  Thriller: require("../Icons/thriller.png"),
  Fantasy: require("../Icons/fantasy.png"),
  Crime: require("../Icons/crime-scene.png"),
  Mystery: require("../Icons/mysterious.png"),
  Noir: require("../Icons/fantasy(1).png"),
  Romance: require("../Icons/love-and-romance.png"),
  Horror: require("../Icons/horror-castle.png"),
  War: require("../Icons/war-weapon.png"),
  Western: require("../Icons/western.png"),
  Biography: require("../Icons/biography.png"),
  Historical: require("../Icons/historic.png"),
};

export default function Homescreen({ navigation }) {
  const movieList = Movies.movies;
  const allCategories = [
    ...new Set(movieList.flatMap((movie) => movie.categories)),
  ];

  function categoryPressHandler(category) {
    navigation.navigate("Movies", { selectedCategory: category });
  }

  return (
    <LinearGradient
      colors={["#3E4A89", "#AAB6E3"]}
      style={styles.homeContainer}
    >
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Movie Explorer</Text>
          <Pressable
            onPress={() => navigation.toggleDrawer()}
            style={styles.hamburgerIcon}
          >
            <Ionicons name="menu" size={24} color="#FFFFFF" />
          </Pressable>
          <View style={styles.searchBarContainer}>
            <SearchBar />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Browse by Categories</Text>
        <View style={styles.categoryContainer}>
          {allCategories.map((category, index) => (
            <Pressable
              key={index}
              android_ripple={{ color: "rgba(255, 255, 255, 0.3)", radius: 15 }}
              style={({ pressed }) => [
                styles.pressable,
                pressed ? styles.pressed : null,
              ]}
              onPress={() => categoryPressHandler(category)}
            >
              <LinearGradient
                colors={["#4e4376", "#2b5876"]}
                style={styles.categoryCard}
              >
                <View style={styles.overlay}>
                  <Image
                    source={categoryIcons[category] || categoryIcons["Action"]}
                    style={styles.icon}
                  />
                  <Text style={styles.categoryText}>{category}</Text>
                </View>
              </LinearGradient>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  header: {
    backgroundColor: "#3E4A89",
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row", // Add this line
    justifyContent: "space-between", // Align items with space between
    alignItems: "center", // Center items vertically
  },
  headerTitle: {
    color: "#FFFFFF",
    position: "absolute",
    top: 30,
    fontSize: 28,
    marginLeft: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  hamburgerIcon: {
    position: "absolute",
    right: 20,
    top: 30,
  },
  searchBarContainer: {
    position: "reletive",
    flex: 1,
    top: 30,
    marginTop: 40,
    // Make sure the search bar takes the available space
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  pressable: {
    width: "48%",
    marginBottom: 20,
    borderRadius: 15,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.75,
  },
  categoryCard: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  overlay: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  categoryText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
