import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function SearchBar({ onSearch }) {
  const [userInput, setUserInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(userInput);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [userInput]);

  useEffect(() => {
    onSearch(debouncedInput);
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
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginVertical: 20,
    width: "100%",
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
