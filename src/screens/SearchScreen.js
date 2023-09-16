import React, { useState } from "react";
import { Text, View } from "react-native";
import RestaurantsList from "../components/RestaurantsList";
import SearchBar from "../components/SearchBar";
import useSearch from "../hooks/useSearch";

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const [searchApi, results, errorMessage] = useSearch();

  const fiterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <View>
      <SearchBar
        search={search}
        onChange={(value) => setSearch(value)}
        onSubmit={() => searchApi(search)}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <Text>We have found {results.length} results</Text>
      <RestaurantsList
        results={fiterResultsByPrice("$")}
        title="Cost Effective"
      />
      <RestaurantsList
        results={fiterResultsByPrice("$$")}
        title="Bit Pricier"
      />
      <RestaurantsList
        results={fiterResultsByPrice("$$$")}
        title="Big Spender"
      />
    </View>
  );
};

export default SearchScreen;
