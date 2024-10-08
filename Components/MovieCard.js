import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function MovieCard({ movie, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.cardContainer}>
      <Image source={{ uri: movie.imageUrl }} style={styles.image} />

      <View style={styles.overlay}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {movie.title}
          </Text>
        </View>

        <View style={styles.details}>
          <View style={styles.genreContainer}>
            <Text style={styles.genre} numberOfLines={1} ellipsizeMode="tail">
              {movie.categories.join(", ")}
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={20} color="#FFD700" />
            <Text style={styles.ratingValue}>{movie.rating.toFixed(1)}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 8,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    width: "48%",
    height: 280,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 15,
    zIndex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
    zIndex: 2,
    padding: 10,
  },
  titleContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  details: {
    alignItems: "center",
  },
  genreContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  genre: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  ratingValue: {
    color: "#FFD700",
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
});
