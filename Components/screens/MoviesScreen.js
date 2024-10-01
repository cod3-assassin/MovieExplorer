import React, { useLayoutEffect, useState, useMemo } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MovieCard from "../MovieCard";
import Movies from "../Data/data.json";
import SearchBar from "../SearchBar"; // Import SearchBar

export default function MoviesScreen({ route, navigation }) {
  const { selectedCategory, showAllMovies } = route.params || {};
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = useMemo(() => {
    if (showAllMovies) {
      return Movies.movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      return Movies.movies.filter(
        (movie) =>
          movie.categories.includes(selectedCategory) &&
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }, [searchTerm, selectedCategory, showAllMovies]);

  useLayoutEffect(() => {
    if (showAllMovies) {
      navigation.setOptions({
        headerShown: false,
      });
    } else {
      navigation.setOptions({
        title: selectedCategory,
        headerStyle: {
          backgroundColor: "#3E4A89",
        },
        headerTintColor: "#fff",
      });
    }
  }, [navigation, selectedCategory, showAllMovies]);

  const handleCardPress = (movie) => {
    navigation.navigate("MovieDetails", { selectedMovie: movie });
  };

  const adjustedMovies =
    filteredMovies.length % 2 === 1
      ? [...filteredMovies, { id: null }] // Add a placeholder for even column count
      : filteredMovies;

  return (
    <LinearGradient colors={["#3E4A89", "#AAB6E3"]} style={styles.screen}>
      {showAllMovies && (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>All Movies</Text>
          <SearchBar onSearch={setSearchTerm} />
        </View>
      )}

      {filteredMovies.length === 0 ? (
        <View style={styles.noMoviesContainer}>
          <Text style={styles.noMoviesText}>
            No movies found with the keyword "{searchTerm}"
          </Text>
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
          initialNumToRender={15}
          maxToRenderPerBatch={15}
          windowSize={5}
          removeClippedSubviews={true}
          updateCellsBatchingPeriod={50}
          onEndReachedThreshold={0.5}
          onEndReached={() => console.log("End reached! Load more data here.")}
          ListFooterComponent={
            <Text style={styles.footerText}>End of List</Text>
          }
        />
      )}
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
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
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
  footerText: {
    textAlign: "center",
    padding: 10,
    color: "#FFFFFF",
  },
  noMoviesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noMoviesText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
});
