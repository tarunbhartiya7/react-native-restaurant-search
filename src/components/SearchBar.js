import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
  searchView: {
    backgroundColor: "lightgrey",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: "row",
  },
  icon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
});

const SearchBar = ({ search, onChange, onSubmit }) => {
  return (
    <View style={styles.searchView}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        placeholder="Search"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={search}
        onChangeText={onChange}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

export default SearchBar;
