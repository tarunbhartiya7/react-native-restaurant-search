import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Restaurant from "./Restaurant";

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
});

const RestaurantsList = ({ results, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item, id }) => {
          return <Restaurant key={id} item={item} />;
        }}
      />
    </View>
  );
};

export default RestaurantsList;
