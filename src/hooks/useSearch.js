import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const searchApi = async (searchTerm) => {
    try {
      setLoading(true);
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response?.data?.businesses);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Something went wrong!");
    }
    setLoading(false);
  };

  useEffect(() => {
    searchApi("pizza");
  }, []);

  return [searchApi, results, errorMessage, loading];
};
