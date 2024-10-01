import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
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
  const [searchTerm, setSearchTerm] = useState("");

  const movieList = Movies.movies;
  const allCategories = [
    ...new Set(movieList.flatMap((movie) => movie.categories)),
  ];

  // Filter categories based on search input
  const filteredCategories = useMemo(() => {
    if (!searchTerm) return allCategories;
    return allCategories.filter((category) =>
      category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, allCategories]);

  function categoryPressHandler(category) {
    navigation.navigate("Movies", { selectedCategory: category });
  }

  return (
    <LinearGradient colors={["#3E4A89", "#AAB6E3"]} style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.headerStyle}>
          <Text style={styles.headerTitle}>Movie Explorer</Text>

          <Ionicons
            name="menu"
            size={32}
            color="#FFFFFF"
            style={styles.hamburgerIcon}
            onPress={() => navigation.toggleDrawer()}
          />
        </View>
        <View style={styles.searchbarContaner}>
          <SearchBar onSearch={setSearchTerm} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.categoryContainer}>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <Pressable
                key={index}
                onPress={() => categoryPressHandler(category)}
                style={styles.pressable}
              >
                <LinearGradient
                  colors={["#4e4376", "#2b5876"]}
                  style={styles.categoryCard}
                >
                  <Image
                    source={categoryIcons[category] || categoryIcons["Action"]}
                    style={styles.icon}
                  />
                  <Text style={styles.categoryText}>{category}</Text>
                </LinearGradient>
              </Pressable>
            ))
          ) : (
            <Text style={styles.noCategoryText}>
              No categories found for this search.
            </Text>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#3E4A89",
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#3E4A89",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  hamburgerIcon: {
    marginLeft: "auto",
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  pressable: {
    width: "48%",
    marginBottom: 20,
    borderRadius: 15,
    overflow: "hidden",
  },
  categoryCard: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
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
  noCategoryText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  searchbarContaner: {
    marginTop: 10,
    width: "100%",
  },
});
