import React, { useState } from "react";
import { Text, ScrollView } from "react-native";
import RestaurantsList from "../components/RestaurantsList";
import SearchBar from "../components/SearchBar";
import useSearch from "../hooks/useSearch";

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const [searchApi, results, errorMessage, loading] = useSearch();

  const fiterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  if (loading) return <Text>Loading...</Text>;

  return (
    <>
      <SearchBar
        search={search}
        onChange={(value) => setSearch(value)}
        onSubmit={() => searchApi(search)}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <ScrollView>
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
      </ScrollView>
    </>
  );
};

export default SearchScreen;
