import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { InstantSearch } from 'react-instantsearch-native';

class SearchScreen extends Component {
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
