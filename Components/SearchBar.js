import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

function SearchBar() {
  const [userInput, setUserInput] = useState("");

  return (
    <View style={styles.inputText}>
      <TextInput
        placeholder="Search for movies..."
        onChangeText={(value) => setUserInput(value)}
        style={styles.textInput}
      />
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  inputText: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 25,
    width: "100%",
    height: 50,
    marginVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    elevation: 4,
    justifyContent: "center",
  },
  textInput: {
    fontSize: 16,
    color: "#333",
  },
});
