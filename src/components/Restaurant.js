import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
  review: {
    color: "grey",
  },
});

const Restaurant = ({ item }) => {
  const { name, image_url, rating, review_count } = item;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image_url }} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.review}>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
};

export default Restaurant;
