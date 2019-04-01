import React from "react";
import { Platform, Image } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import Icon from "../components/SvgIcon";

/**
 * Import our screens
 */
import ExploreScreen from "../screens/ExploreScreen";
import MyVibesScreen from "../screens/MyVibesScreen";
import SearchScreen from "../screens/SearchScreen";
import CategoryScreen from "../screens/CategoryScreen";
import FormStatesScreen from "../screens/FormStatesScreen";
import EffectsScreen from "../screens/EffectsScreen";
import MedicalScreen from "../screens/MedicalScreen";
import GoodForScreen from "../screens/GoodForScreen";
import FlavorsScreen from "../screens/FlavorsScreen";
import ReviewScreen from "../screens/ReviewScreen";
import StrainInfoScreen from "../screens/StrainInfoScreen";
/**
 * setup Stack navigatos and thier navigation options
 */

// Search screen stack navigator
const SearchStack = createStackNavigator({
  Search: SearchScreen
  
});

// Search screen stack navigation options
SearchStack.navigationOptions = {
  tabBarLabel: "Search",
  tabBarVisible: false,
  tabBarIcon: ({ focused }) => {
    if (focused) {
      return (
        <Icon
          name="SearchIcon"
          height={24}
          width={24}
          viewBox="0 0 24 24"
          fill="#ff5a5f"
        />
      );
    } else {
      return (
        <Icon
          name="SearchIcon"
          height={24}
          width={24}
          viewBox="0 0 24 24"
          fill="#666"
        />
      );
    }
  },
  tabBarOptions: {
    activeTintColor: "#ff5a5f",
    inactiveTintColor: "#666"
  }
};

// MyVibe screen stack navigator
const MyVibeStack = createStackNavigator({
  MyVibes: MyVibesScreen,
  FormStates:FormStatesScreen,
  Effects:EffectsScreen,
  Medical:MedicalScreen,
  GoodFor:GoodForScreen,
  Flavors:FlavorsScreen,
  Review:ReviewScreen,
  StrainInfo:StrainInfoScreen
});

// MyvVibe screen stack navigation options
MyVibeStack.navigationOptions = {
  tabBarLabel: "My Vibes",

  tabBarIcon: ({ focused }) => {
    if (focused) {
      return (
        <Icon
          name="MyVibesIcon"
          height={24}
          width={24}
          viewBox="0 0 24 24"
          fill="#ff5a5f"
        />
      );
    } else {
      return (
        <Icon
          name="MyVibesIcon"
          height={24}
          width={24}
          viewBox="0 0 24 24"
          fill="#666"
        />
      );
    }
  },
  tabBarOptions: {
    activeTintColor: "#ff5a5f",
    inactiveTintColor: "#666"
  }
};

// Explore screen stack navigator
const ExploreStack = createStackNavigator({
  Explore: ExploreScreen,
  Category: CategoryScreen
});

// Explore screen stack navigation options
ExploreStack.navigationOptions = {
  header: null,
  tabBarLabel: "Explore",
  tabBarIcon: ({ focused }) => {
    if (focused) {
      return (
        <Icon
          name="ExploreIcon"
          height={24}
          width={24}
          viewBox="0 0 24 24"
          fill="#ff5a5f"
          fillRule="nonzero"
        />
      );
    } else {
      return (
        <Icon
          name="ExploreIcon"
          height={24}
          width={24}
          viewBox="0 0 24 24"
          fill="#666"
          fillRule="nonzero"
        />
      );
    }
  },
  tabBarOptions: {
    activeTintColor: "#ff5a5f",
    inactiveTintColor: "#666"
  }
};

// Export BottomTabNavigator component with our 3 stack navigators
const bottomTabNavigator = createBottomTabNavigator(
  {
    ExploreStack,
    SearchStack,
    MyVibeStack
  },
  {
    headerMode: "none",
    activeColor: "#ff5a5f",
    inactiveColor: "#666"
  }
);

export default createStackNavigator(
  { bottomTabNavigator },
  { headerMode: "none" }
);
