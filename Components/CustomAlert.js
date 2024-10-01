import React from "react";
import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CustomAlert = ({ visible, message, onClose, type, onNavigate }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <LinearGradient
          colors={
            type === "success" ? ["#6DD5FA", "#2980B9"] : ["#FF5F6D", "#FFC371"]
          }
          style={styles.alertContainer}
        >
          <Text style={styles.message}>{message}</Text>
          <Pressable style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>OK</Text>
          </Pressable>
          {type === "success" && (
            <Pressable style={styles.navigateButton} onPress={onNavigate}>
              <Text style={styles.navigateText}>Go to Favorites</Text>
            </Pressable>
          )}
        </LinearGradient>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  alertContainer: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  button: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#3E4A89",
    fontSize: 16,
    fontWeight: "bold",
  },
  navigateButton: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  navigateText: {
    color: "#3E4A89",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomAlert;
