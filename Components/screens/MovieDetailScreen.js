import React, { useContext, useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FavouriteContext } from "../Context/favourite-context";
import { Ionicons } from "@expo/vector-icons";

export default function MovieDetailsScreen({ route, navigation }) {
  const { selectedMovie } = route.params;
  const FavMovie = useContext(FavouriteContext);

  const MovieId = selectedMovie.id;
  const movieIsFav = FavMovie.ids.includes(MovieId);

  function chnageFavorateStatusHandler() {
    if (movieIsFav) {
      FavMovie.removefavourite(MovieId);
    } else {
      FavMovie.addFavourite(MovieId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMovie.title,
      headerRight: () => {
        return (
          <Ionicons
            name={movieIsFav ? "star" : "star-outline"}
            color="white"
            size={24}
            onPress={chnageFavorateStatusHandler}
          />
        );
      },
      headerStyle: {
        backgroundColor: "#3E4A89",
      },
      headerTintColor: "#fff",
    });
  }, [navigation, selectedMovie, movieIsFav]);

  return (
    <LinearGradient colors={["#3E4A89", "#AAB6E3"]} style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: selectedMovie.imageUrl }}
            style={styles.image}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{selectedMovie.title}</Text>

          {/* Rating Circle */}
          <LinearGradient
            colors={["#FFD700", "#FFA500"]}
            style={styles.ratingContainer}
          >
            <Text style={styles.rating}>{selectedMovie.rating.toFixed(1)}</Text>
          </LinearGradient>

          {/* Categories */}
          <View style={styles.categoriesContainer}>
            {selectedMovie.categories.map((category, index) => (
              <LinearGradient
                key={index}
                colors={["#6DD5FA", "#2980B9"]}
                style={styles.categoryPill}
              >
                <Text style={styles.categoryText}>{category}</Text>
              </LinearGradient>
            ))}
          </View>

          {/* Cast */}
          <View style={styles.castContainer}>
            <Text style={styles.sectionTitle}>Cast:</Text>
            <View style={styles.castList}>
              {selectedMovie.cast.map((actor, index) => (
                <View key={index} style={styles.castChip}>
                  <Text style={styles.castText}>{actor}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Description */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description:</Text>
            <Text style={styles.description}>{selectedMovie.description}</Text>
          </View>

          {/* Budget & Box Office */}
          <View style={styles.budgetContainer}>
            <LinearGradient
              colors={["#A1FFCE", "#FAFFD1"]}
              style={styles.budgetBox}
            >
              <Text style={styles.budgetTitle}>Budget:</Text>
              <Text style={[styles.budget, (style = { color: "black" })]}>
                ${selectedMovie.budget.toLocaleString()}
              </Text>
            </LinearGradient>

            <LinearGradient
              colors={["#FFC371", "#FF5F6D"]}
              style={styles.budgetBox}
            >
              <Text style={styles.budgetTitle}>Box Office Collection:</Text>
              <Text style={styles.budget}>
                ${selectedMovie.boxOffice.toLocaleString()}
              </Text>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    padding: 16,
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: 300,
    borderRadius: 15,
    marginBottom: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  contentContainer: {
    width: "100%",
    padding: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
    textAlign: "center",
    letterSpacing: 1.2,
  },

  /* Rating Circle with Gradient Border */
  ratingContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#fff",
  },
  rating: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3E4A89",
  },

  /* Categories Pill with Gradient */
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 16,
  },
  categoryPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginHorizontal: 4,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "500",
    letterSpacing: 0.5,
  },

  /* Cast Section */
  castContainer: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 8,
  },
  castList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  castChip: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    margin: 4,
  },
  castText: {
    fontSize: 14,
    color: "#3E4A89",
    fontWeight: "500",
  },

  /* Description Section */
  descriptionContainer: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  descriptionTitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#ddd",
    textAlign: "center",
    lineHeight: 22,
  },

  budgetContainer: {
    width: "100%",
    marginBottom: 16,
  },
  budgetBox: {
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
  },
  budgetTitle: {
    fontSize: 18,
    color: "#3E4A89",
    marginBottom: 4,
    fontWeight: "600",
    textAlign: "center",
  },
  budget: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});
