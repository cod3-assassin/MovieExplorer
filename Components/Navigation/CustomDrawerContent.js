import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

export default function CustomDrawerContent(props) {
  return (
    <View style={styles.drawerContainer}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Ionicons
          name="film-outline"
          size={40}
          color="#FFD700"
          style={styles.headerIcon}
        />
        <Text style={styles.headerText}>Movie Explorer</Text>
      </View>

      {/* Scrollable Drawer Items */}
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContent}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Footer Section */}
      <View style={styles.footerContainer}>
        <View style={styles.footerItem}>
          <Ionicons name="log-out-outline" size={18} color="#AAB6E3" />
          <Text style={styles.footerText}>Logout</Text>
        </View>
        <View style={styles.footerItem}>
          <Ionicons
            name="information-circle-outline"
            size={18}
            color="#AAB6E3"
          />
          <Text style={styles.footerText}>App Version: 1.0.0</Text>
        </View>
        <View style={styles.footerItem}>
          <Ionicons name="document-text-outline" size={18} color="#AAB6E3" />
          <Text style={styles.footerText}>Terms & Conditions</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  headerContainer: {
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 215, 0, 0.1)",
    marginBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  headerIcon: {
    marginBottom: 10,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  drawerContent: {
    flexGrow: 1,
    paddingTop: 10,
  },
  footerContainer: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginHorizontal: 15,
    marginBottom: 20,
  },
  footerItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  footerText: {
    color: "#AAB6E3",
    fontSize: 15,
    marginLeft: 10,
  },
});
