import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { InstantSearch } from "react-instantsearch-native";
import { SearchBar } from "react-native-elements";
import Icon from "../components/SvgIcon";

class SearchScreen extends Component {
  static navigationOptions = {
    headerTitle: (
      <SearchBar
        placeholder="Find strain and products"
        inputContainerStyle={{
          borderWidth: 0
        }}
        searchIcon={false}
        containerStyle={{
          borderColor: "transparent",
          borderWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 1,
          borderBottomColor: "#fff",
          width: 245,
          height: 45,
          alignSelf: "center",
          marginLeft: "20%",
          backgroundColor: "transparent",
          color: "#fff"
        }}
        placeholderTextColor="#fff"
        inputStyle={{
          backgroundColor: "transparent",
          textAlign: "center",
          fontSize: 16,
          fontFamily: "sf-text",
          color: "#fff"
        }}
        leftIconContainerStyle={{
          marginRight: 0,
          color: "#fff"
        }}
      />
    ),
    headerStyle: {
      backgroundColor: "#ff5a5f",
      paddingTop: 20,
      paddingBottom: 20,
      height: 75
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <InstantSearch
          appId="latency"
          apiKey="6be0576ff61c053d5f9a3225e2a90f76"
          indexName="instant_search"
        >
          <Text>
            Congrats 🎉! Your application is now connected to Algolia!
          </Text>
        </InstantSearch>
      </View>
    );
  }
}
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
