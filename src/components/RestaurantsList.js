import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

const RestaurantsList = ({ results, title }) => {
  return (
    <View style={styles.searchView}>
      <Text style={styles.text}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        renderItem={({ item, id }) => {
          return <Text key={id}>{item.name}</Text>;
        }}
      />
    </View>
  );
};

export default RestaurantsList;
