import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import {
  InstantSearch,
  connectInfiniteHits,
  connectSearchBox,
  connectHighlight,
  connectAutoComplete,
  connectStats
} from "react-instantsearch-native";
import { SearchBar, Button } from "react-native-elements";
import Icon from "../components/SvgIcon";
import StrainCard from "../components/StrainCard";
import ScrollableTabView from "react-native-scrollable-tab-view";
import TabBar from "react-native-underline-tabbar";

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
                  Strain, {item.category_name || item.Type}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
});

const HitStats = connectStats(({ nbHits }) => (
  <Text
    style={{
      fontFamily: "sf-text",
      fontSize: 16,
      color: "#717171",
      marginBottom: 30,
      marginTop: 20
    }}
  >
    {nbHits} Search Results
  </Text>
));
const HitCardsInfinity = connectInfiniteHits(({ hits, hasMore, refine }) => {
  /* if there are still results, you can
  call the refine function to load more */
  const onEndReached = function() {
    if (hasMore) {
      refine();
    }
  };

  if (hits <= 0) return null;
  return (
    <View style={{ padding: 0, marginLeft: 20, marginRight: 20 }}>
      <HitStats />

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
              <StrainCard
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
              />
              {/* <View
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
              </View> */}
            </View>
          );
        }}
      />
    </View>
  );
});

const HitAutoComplete = connectAutoComplete(Hits);
const HitCardsAutoConplete = connectAutoComplete(HitCardsInfinity);

const VirtualSearchBox = connectSearchBox(
  ({ refine, currentRefinement, isSearchStalled, searchText }) => {
    refine(searchText);
    return null;
  }
);

class SearchScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <SearchBar
        placeholder="Find strain and products"
        onChangeText={navigation.getParam("updateSearch", () => {})}
        value={navigation.getParam("search", "")}
        onSubmitEditing={navigation.getParam("onSubmit", () => {
          console.log("onSubmit not attached");
        })}
        onKeyPress={navigation.getParam("onKeyPress", () => {
          console.log("onKeyPress not mounted");
        })}
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
          backgroundColor: "transparent"
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
  });

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      isSearching: true,
      selectedTab: "all-cannabis",
      updateSearch: () => {}
    };
  }

  onSubmit = () => {
    this.setState({
      isSearching: false
    });
  };

  componentDidMount() {
    console.log("component mounted");
    this.props.navigation.setParams({
      search: this.state.search,
      updateSearch: this.updateSearch,
      onKeyPress: this.handleOnKeyButtonDown,
      onSubmit: this.onSubmit
    });
  }

  handleOnKeyButtonDown = ({ nativeEvent: { key: keyValue } }) => {
    // console.log(keyValue);
    // console.log("onKeyButtonDownPRessed Called !");
    if (keyValue === "Enter") {
      this.setState({
        isSearching: false
      });
    }
  };

  updateSearch = search => {
    console.log("updateSearch function called");
    this.setState({ search });
    this.props.navigation.setParams({
      search: search
    });
  };

  render() {
    const { search, isSearching } = this.state;
    return (
      // <ScrollableTabView
      //   tabBarActiveTextColor="#ff5a5f"
      //   renderTabBar={() => <TabBar underlineColor="#ff5a5f" />}
      // >
      //   <View tabLabel={{ label: "All Cannabis" }} label="All Cannabis"> </View>
      //   <View tabLabel={{ label: "My Cannabis" }} label="My Cannabis">
      //     <Text>My Cannabis </Text>
      //   </View>
      // </ScrollableTabView>

      <View style={styles.container}>
        <ScrollableTabView
          tabBarActiveTextColor="#ff5a5f"
          tabBarBackgroundColor="#fff"
          tabBarInactiveTextColor="#ff5a5f"
          tabBarTextStyle={{
            fontSize: 14,
            fontFamily: "sf-text",
            fontWeight: "500"
          }}
          style={{ margin: 0, height: 50 }}
          renderTabBar={() => <TabBar underlineHeight={3} tabMargin={30} tabBarStyle={{ marginTop:-10, padding: 25, paddingBottom:0 }}
          underlineColor="#ff5a5f" />}
        >
          <View tabLabel={{ label: "All Cannabis" }} label="All Cannabis">
            <View
              style={{
                margin: 0,
                marginTop: 30,
                paddingLeft: 67,
                paddingRight: 67,
                flex: 1,
                paddingBottom: 70
              }}
            >
              <TouchableOpacity
                style={{
                  paddingTop: 15,
                  paddingBottom: 15,
                  backgroundColor: "#fff",
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: "#33000000",
                  height: 50,
                  width: 225
                }}
                activeOpacity={0.5}
              >
                <Text
                  style={{
                    color: "#ff5a5f",
                    textAlign: "center",
                    fontSize: 14,
                    fontFamily: "sf-text"
                  }}
                >
                  + Add Custom
                </Text>
              </TouchableOpacity>
            </View>
            <View>
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
                  <VirtualSearchBox
                    defaultRefinement={search}
                    searchText={search}
                  />
                </View>
                {isSearching ? (
                  <HitAutoComplete />
                ) : (
                  <HitCardsAutoConplete defaultRefinement={search} />
                )}
              </InstantSearch>
            </View>
            <View style={{ height: 0.1, flex: 1 }} />
          </View>
          <View tabLabel={{ label: "My Cannabis" }} label="My Cannabis" />
        </ScrollableTabView>
      </View>
    );
  }
}
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    marginBottom: 10
  }
});
