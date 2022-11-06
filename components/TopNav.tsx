import { Icon } from "@rneui/base";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function TopNav() {
  return (
    <View style={styles.headerBar}>
      <View style={styles.searchIcon}>
        <Icon name="search" />
      </View>
      <View style={styles.searchInput}>
        <TextInput
          autoComplete="name"
          style={{ width: "80%", backgroundColor: "#eee" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    borderRadius: 25,
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    flex: 1,
  },
  searchInput: {
    flex: 4,
    paddingRight: 20,
  },
});
