import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Restaurant: RestaurantScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
