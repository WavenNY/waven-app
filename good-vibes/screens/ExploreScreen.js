import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";

// Import search bar from compponents
import { SearchBar } from "react-native-elements";

//import { FloatingAction } from "react-native-floating-action";
//import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "../components/SvgIcon";

import PopularStrains from "../components/PopularStrains";
import StrainTypes from "../components/StrainTypes";
import ProductTypes from "../components/ProductTypes";
import StrainExperiences from "../components/StrainExperiences";
import PopularProducts from "../components/PopularProducts";
import MedicalUse from "../components/MedicalUse";
import GoodVibesSearch from "../components/GoodVibesSearch";

// const fabActions = [
//   {
//     text: "Action 1",
//     icon: require("../assets/images/1x/write_edit.png"),
//     name: "bt_action1",
//     position: 1
//   },
//   {
//     text: "Action 2",
//     icon: require("../assets/images/1x/show_details.png"),
//     name: "bt_action2",
//     position: 2
//   }
// ];

class ExploreScreen extends Component {
  constructor() {
    super();
    //this.floatingAction.animateButton();
  }

  onSearchChange = () => {
    return null;
  };

  onSearchClear = () => {
    return null;
  };

  static navigationOptions = {
    headerTitle: (
      <SearchBar
        placeholder="Search Waven"
        round
        inputContainerStyle={{
          borderWidth: 0
        }}
        containerStyle={{
          borderColor: "transparent",
          borderWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          width: 245,
          height: 35,
          alignSelf: "center",
          marginLeft: "30%",
          backgroundColor: "transparent"
        }}
        inputStyle={{
          backgroundColor: "#fff",
          textAlign: "center"
        }}
        leftIconContainerStyle={{
          marginRight: 0
        }}
      />
    ),
    headerStyle: {
      backgroundColor: "#ff5a5f",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 20,
      paddingBottom: 20,
      height: 75
    }
  };
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#f3f6f3" }}>
        <ProductTypes titletext="Product Types" />
        <PopularProducts style={{ marginTop: 20 }} titletext="Popular Vapes" />
        <StrainTypes titletext="Strain Types" />
        <PopularStrains />
        <MedicalUse titletext="Medical Use" />
        <PopularProducts
          style={{ marginTop: 20 }}
          titletext="Hot CBD Products"
        />
        <StrainExperiences titletext="Strain Experiences" />
        <GoodVibesSearch
          title="Looking for something else?"
          desc="Find it with GoodVibes Search"
          buttonTitle="Show me"
        />
      </ScrollView>
    );
  }
}
export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f6f3"
  }
});
