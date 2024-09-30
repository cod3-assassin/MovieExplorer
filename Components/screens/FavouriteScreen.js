import React, { useContext } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import MovieCard from "../MovieCard";
import { FavouriteContext } from "../Context/favourite-context";
import MOVIES from "../Data/data.json"; // Ensure this path is correct

export default function FavouriteScreen({ navigation }) {
  const { ids } = useContext(FavouriteContext);
  console.log("Favourite IDs: ", ids); // Log the IDs from context

  // Accessing the movies array from the MOVIES object
  const favouriteMovies = Array.isArray(MOVIES.movies)
    ? MOVIES.movies.filter((movie) => ids.map(Number).includes(movie.id)) // Convert ids to numbers
    : [];

  // Log the filtered favourite movies
  console.log("Filtered Favourite Movies: ", favouriteMovies); // Log here

  function renderMovieItem({ item }) {
    return (
      <MovieCard
        movie={item}
        onPress={() =>
          navigation.navigate("MovieDetails", { selectedMovie: item })
        }
      />
    );
  }

  return (
    <LinearGradient
      colors={["#3E4A89", "#AAB6E3"]}
      style={styles.screenContainer}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favourites</Text>
        <Pressable
          onPress={() => navigation.toggleDrawer()}
          style={styles.hamburgerIcon}
        >
          <Ionicons name="menu" size={24} color="#FFFFFF" />
        </Pressable>
      </View>

      <View style={styles.content}>
        {favouriteMovies.length > 0 ? (
          <FlatList
            data={favouriteMovies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderMovieItem}
            numColumns={2}
          />
        ) : (
          <Text style={styles.text}>No Favourites Added Yet!</Text>
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  header: {
    backgroundColor: "#3E4A89",
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  hamburgerIcon: {
    position: "absolute",
    right: 20,
    top: 30,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 22,
  },
});
