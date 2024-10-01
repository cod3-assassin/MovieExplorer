import React, { useContext } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import MovieCard from "../MovieCard";
import { FavouriteContext } from "../Context/favourite-context";
import MOVIES from "../Data/data.json";

export default function FavouriteScreen({ navigation }) {
  const { ids } = useContext(FavouriteContext);

  const favouriteMovies = MOVIES.movies.filter((movie) =>
    ids.map(Number).includes(movie.id)
  );

  const adjustedMovies =
    favouriteMovies.length % 2 === 1
      ? [...favouriteMovies, { id: null }]
      : favouriteMovies;

  const handleCardPress = (movie) => {
    navigation.navigate("MovieDetails", { selectedMovie: movie });
  };

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

      {favouriteMovies.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No favourites yet, add some!</Text>
        </View>
      ) : (
        <FlatList
          data={adjustedMovies}
          renderItem={({ item }) =>
            item.id ? (
              <MovieCard movie={item} onPress={() => handleCardPress(item)} />
            ) : (
              <View style={styles.placeholder} />
            )
          }
          keyExtractor={(item) =>
            item.id ? item.id.toString() : "placeholder"
          }
          numColumns={2}
          contentContainerStyle={styles.flatListContainer}
          showsVerticalScrollIndicator={false}
        />
      )}
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
  flatListContainer: {
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  placeholder: {
    width: "48%",
    height: 200,
    margin: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
