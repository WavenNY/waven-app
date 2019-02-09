import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput
} from "react-native";
import {
  InstantSearch,
  connectInfiniteHits,
  connectSearchBox,
  connectHighlight,
  connectAutoComplete
} from "react-instantsearch-native";
import { SearchBar } from "react-native-elements";
import Icon from "../components/SvgIcon";
import StrainCard from "../components/StrainCard";

const Hits = connectInfiniteHits(({ hits, hasMore, refine }) => {
  /* if there are still results, you can
  call the refine function to load more */
  const onEndReached = function() {
    if (hasMore) {
      refine();
    }
  };

  if (hits <= 0) return null;
  return (
    <View style={{ padding: 0, margin: 0 }}>
      {/* <Text
        style={{
          fontFamily: "sf-text",
          fontSize: 16,
          color: "#717171",
          marginBottom: 30,
          marginTop: 20
        }}
      >
        {hits.length} Search Results
      </Text> */}

      <FlatList
        data={hits}
        onEndReached={onEndReached}
        keyExtractor={(item, index) => item.objectID}
        ItemSeparatorComponent={() => (
          <View style={{ borderColor: "#f0f0f0", height: 0.5, flex: 1 }} />
        )}
        ListFooterComponent={() => <View style={{ height: 0.1, flex: 1 }} />}
        renderItem={({ item }) => {
          return (
            <View style={{ margin: 0, padding: 0 }}>
              {/* <StrainCard
                title={item.ProductName || item.Name}
                type={item.category_name || item.Type}
                ratings={
                  item.Rating ||
                  (item.StarRating ? item.StarRating.substring(0, 3) : false) ||
                  0
                }
                id={item.objectID}
                desc=""
                image={
                  item.main_pic ||
                  "https://ddd33q3967xhi.cloudfront.net/OOyks6bxS8K8QF2NskhMGVVM4RA=/fit-in/700x700/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2fqGlQJnAwSxmlWz41z3yR_yocan-magneto-black.jpg"
                }
                positiveEffects={[]}
              /> */}
              <View
                style={{
                  backgroundColor: "#fff",
                  paddingLeft: 40,
                  margin: 0,
                  paddingTop: 14,
                  paddingBottom: 14
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "#212121",
                    textAlign: "left",
                    fontFamily: "sf-text",
                    fontWeight: "bold"
                  }}
                >
                  {item.ProductName || item.Name}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#717171",
                    textAlign: "left",
                    fontFamily: "sf-text"
                  }}
                >
                  {item.category_name || item.Type}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
});

const HitAutoComplete = connectAutoComplete(Hits);

const SearchBox = connectSearchBox(({ refine, currentRefinement }) => {
  const styles = {
    flex: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "sf-text",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    alignSelf: "flex-end",
    width: 245,
    height: 40
  };

  return (
    <View
      style={{ flex: 1, flexDirection: "row", alignContent: "space-around" }}
    >
      <Icon
        name="SearchIcon"
        height={20}
        width={20}
        viewBox="0 0 20 20"
        fill="#fff"
        style={{ flex: 1, alignSelf: "flex-start" }}
      />
      <TextInput
        style={styles}
        onChangeText={text => refine(text)}
        value={currentRefinement}
        placeholder={"Search a product..."}
        clearButtonMode="while-editing"
        spellCheck={false}
        autoCorrect={false}
        underlineColorAndroid="transparent"
        autoFocus
        autoCapitalize={"none"}
        searchAsYouType={true}
      />
    </View>
  );
});

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
          fontFamily: "sf-text"
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
          appId="LVTC40CNHH"
          apiKey="7d8b604b303f98f330876f9b177d1f73"
          indexName="search_strain_products"
          searchFunction={({ helper }) => {
            if (helper.getState().query === "") {
              return null;
            }
            helper.search();
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <SearchBox />
          </View>

          <HitAutoComplete />
        </InstantSearch>
        <View style={{ height: 0.1, flex: 1 }} />
      </View>
    );
  }
}
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    marginBottom: 10
  }
});
