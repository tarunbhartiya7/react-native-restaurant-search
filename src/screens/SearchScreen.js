import React, { useState } from "react";
import { Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [search, setSearch] = useState("");

  return (
    <View>
      <SearchBar
        search={search}
        onChange={(value) => setSearch(value)}
        onSubmit={() => console.log("submitted")}
      />
      <Text>{search}</Text>
    </View>
  );
};

export default SearchScreen;
