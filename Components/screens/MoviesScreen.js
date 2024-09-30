import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MovieCard from "../MovieCard";
import Movies from "../Data/data.json";

export default function MoviesScreen({ route, navigation }) {
  const { selectedCategory } = route.params;
  const filteredMovies = Movies.movies.filter((movie) =>
    movie.categories.includes(selectedCategory)
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCategory,
      headerStyle: {
        backgroundColor: "#3E4A89",
      },
      headerTintColor: "#fff",
    });
  }, [navigation, selectedCategory]);

  const handleCardPress = (movie) => {
    navigation.navigate("MovieDetails", { selectedMovie: movie });
  };

  const adjustedMovies =
    filteredMovies.length % 2 === 1
      ? [...filteredMovies, { id: null }]
      : filteredMovies;

  return (
    <LinearGradient colors={["#3E4A89", "#AAB6E3"]} style={styles.screen}>
      <FlatList
        data={adjustedMovies}
        renderItem={({ item }) =>
          item.id ? (
            <MovieCard movie={item} onPress={() => handleCardPress(item)} />
          ) : (
            <View style={styles.placeholder} />
          )
        }
        keyExtractor={(item) => (item.id ? item.id.toString() : "placeholder")}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#3E4A89",
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
});
