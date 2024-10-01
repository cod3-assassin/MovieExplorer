import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function SearchBar({ onSearch }) {
  const [userInput, setUserInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");

  // Debounce user input to avoid triggering search on every keystroke
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(userInput);
    }, 300); // Adjust the delay as needed

    return () => {
      clearTimeout(handler);
    };
  }, [userInput]);

  useEffect(() => {
    onSearch(debouncedInput); // Trigger search after debounce
  }, [debouncedInput, onSearch]);

  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={24} color="#6C7A93" style={styles.icon} />
      <TextInput
        placeholder="Search for movies or genres..."
        placeholderTextColor="#6C7A93"
        value={userInput}
        onChangeText={setUserInput}
        style={styles.textInput}
      />
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,
    elevation: 6, // Adds shadow to give a floating effect
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginVertical: 20,
    width: "100%", // Adjust based on parent container width
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});
