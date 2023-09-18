import React, { useEffect, useState } from "react";
import { Text, FlatList, Image, StyleSheet, View } from "react-native";
import yelp from "../api/yelp";

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  image: {
    width: 250,
    height: 150,
    marginBottom: 15,
  },
});

const RestaurantScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default RestaurantScreen;
