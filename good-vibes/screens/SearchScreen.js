import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar
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
import { Constants, Svg, LinearGradient } from "expo";

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
    <View
      style={{ padding: 0, margin: 0, top: 0, left: 0, position: "absolute" }}
    >
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
        style={{
          shadowColor: "#19000000",
          shadowRadius: 3,
          elevation: 1,
          shadowOpacity: 0.2,
          paddingTop: 5,
          paddingBottom: 5
        }}
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
    <View
      style={{
        margin: 0,
        padding: 0,
        paddingHorizontal: 20,
        backgroundColor: "#f9faf9"
      }}
    >
      <FlatList
        style={{
          shadowColor: "#19000000",
          shadowRadius: 3,
          elevation: 1,
          shadowOpacity: 0.2,
          paddingTop: 5,
          paddingBottom: 5
        }}
        data={hits}
        onEndReached={onEndReached}
        keyExtractor={(item, index) => item.objectID}
        ItemSeparatorComponent={() => (
          <View style={{ borderColor: "#f0f0f0", height: 0.5, flex: 1 }} />
        )}
        ListHeaderComponent={() => (
          <View>
            <HitStats />
          </View>
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
                  item.imageUrl ||
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
const SearchIcon = ({ props }) => {
  return (
    <View style={{ elevation: 1, marginTop: 30, marginLeft: 30 }}>
      <Icon
        name="SearchIcon"
        height={16}
        width={16}
        viewBox="0 0 16 16"
        fill="#fff"
      />
    </View>
  );
};
class SearchScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      // headerLeft: (
      //   <Icon containerStyle={styles.icon} type="ionicon" name={"md-menu"} />
      // ),
      tabBarVisible: false,
      headerLeft: (
        <TouchableOpacity
          onPress={navigation.getParam("goBack", () => {
            console.log("goBack not implemented");
          })}
        >
          <Icon
            name="MenuBackIcon"
            height={20}
            width={20}
            fill="#fff"
            style={{ marginLeft: 15, marginRight: 0 }}
          />
        </TouchableOpacity>
      ),
      headerTitle: (
        <View
          style={{
            flex: 1,
            margin: 0,
            flexDirection: "row",
            paddingLeft: 5,
            marginLeft: 5,
            marginTop: -20
          }}
        >
          <View
            style={{
              elevation: 1,
              marginTop: 20,
              marginLeft: 15,
              flex: 0.1,
              width: 16,
              height: 16
            }}
          >
            <Icon
              name="SearchIcon"
              height={16}
              width={16}
              viewBox="0 0 24 24"
              fill="#fff"
            />
          </View>
          <SearchBar
            noIcon
            placeholder="Find strain and products"
            onChangeText={navigation.getParam("updateSearch", () => {})}
            value={navigation.getParam("search", "")}
            onSubmitEditing={navigation.getParam("onSubmit", () => {
              console.log("onSubmit not attached");
            })}
            onKeyPress={navigation.getParam("onKeyPress", () => {
              console.log("onKeyPress not mounted");
            })}
            onFocus={navigation.getParam("onFocus", () => {
              console.log("onFocus not mounted");
            })}
            inputContainerStyle={{
              borderWidth: 0
            }}
            containerStyle={{
              marginLeft: -10,
              borderColor: "transparent",
              borderWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 1,
              borderBottomColor: "#fff",
              width: 235,
              height: 40,
              backgroundColor: "transparent"
            }}
            placeholderTextColor="#fff"
            style={{
              color: "#fff",
              flex: 0.9,
              marginLeft: -20,
              marginTop: 0
            }}
            inputContainerStyle={{ color: "#fff", width: 230 }}
            inputStyle={{
              backgroundColor: "transparent",
              fontSize: 16,
              fontFamily: "sf-text",
              color: "#fff",
              textAlign: "left",
              paddingLeft: 20
            }}
            tintColor="#fff"
            cancelIcon={<Text>Hi</Text>}
            selectionColor="#fff"
          />
          {navigation.getParam("clearButton", false) ? (
            <View
              style={{
                marginTop: 18,
                marginLeft: -17,
                height: 25,
                width: 25
              }}
            >
              <TouchableOpacity
                style={{
                  zIndex: 1,
                  flex: 1
                }}
                onPress={navigation.getParam("clearSearchText", () => {
                  console.log("clearBtn not implemented");
                })}
              >
                <Icon
                  name="SearchCloseButton"
                  height={16}
                  width={16}
                  fill="#fff"
                  style={{}}
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      ),
      headerStyle: {
        backgroundColor: "#ff5a5f",
        paddingTop: 20,
        paddingBottom: 20,
        height: 50,
        borderBottomWidth: 0,
        shadowOpacity: 0,
        shadowOffset: {
          height: 0
        },
        shadowRadius: 0,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0
      },
      headerTitleStyle: {
        alignSelf: "center"
      }
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      isSearching: true,
      selectedTab: "all-cannabis",
      updateSearch: () => {},
      uiState: 0
    };
  }

  onSubmit = () => {
    this.setState({
      isSearching: false,
      uiState: 2
    });
  };

  componentDidMount() {
    console.log("component mounted");
    this.props.navigation.setParams({
      search: this.state.search,
      updateSearch: this.updateSearch,
      onKeyPress: this.handleOnKeyButtonDown,
      onSubmit: this.onSubmit,
      onFocus: this.handleOnFocus,
      goBack: this.handleGoBack,
      clearSearchText: this.handleClearText
    });
  }

  handleClearText = () => {
    console.log("fn handleClearText called");
    this.setState({ search: "" });
    this.props.navigation.setParams({ search: "" });
    this.updateSearch("");
  };

  handleGoBack = () => {
    this.props.navigation.navigate("Explore");
  };

  handleOnKeyButtonDown = ({ nativeEvent: { key: keyValue } }) => {
    // console.log(keyValue);
    // console.log("onKeyButtonDownPRessed Called !");
    if (keyValue === "Enter") {
      this.setState({
        isSearching: false,
        uiState: 2
      });
    }
  };

  handleOnFocus = () => {
    console.log("handleOnFocus called");
    if (this.state.search.length) {
      this.setState({
        isSearching: true,
        uiState: 1
      });
    }
  };

  updateSearch = search => {
    console.log("updateSearch function called");
    console.log("Search lenght:" + search.length);
    if (search.length <= 0) {
      this.setState({ uiState: 0, clearButton: false, search: "" });
      this.props.navigation.setParams({ clearButton: false, search: "" });
    } else {
      this.setState({ search, clearButton: true, uiState: 1 });
      this.props.navigation.setParams({
        search: search,
        clearButton: true
      });
    }
  };

  render() {
    const { search, isSearching, uiState } = this.state;
    stateRenderData = "";
    const dataList = [
      { id: 1, name: "Lorem Lipsum", type: "Strain, Indica" },
      { id: 2, name: "Lorem Lipsum", type: "Strain, Indica" },
      { id: 3, name: "Lorem Lipsum", type: "Strain, Indica" },
      { id: 4, name: "Lorem Lipsum", type: "Strain, Indica" },
      { id: 5, name: "Lorem Lipsum", type: "Strain, Indica" }
    ];
    if (uiState == 0) {
      stateRenderData = (
        <FlatList
          style={{
            shadowColor: "#19000000",
            shadowRadius: 3,
            elevation: 1,
            shadowOpacity: 0.2,
            paddingTop: 5,
            paddingBottom: 5
          }}
          data={dataList}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={() => (
            <Text
              style={{
                fontFamily: "sf-text",
                fontSize: 14,
                fontWeight: "bold",
                color: "#212121",
                backgroundColor: "#fff",
                paddingVertical: 20,
                paddingHorizontal: 20,
                borderBottomColor: "#f0f0f0",
                borderBottomWidth: 1
              }}
            >
              Recent Activity
            </Text>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                borderColor: "#f0f0f0",
                height: 2,
                flex: 1,
                borderWidth: 1
              }}
            />
          )}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  margin: 0,
                  padding: 0,
                  paddingHorizontal: 20,
                  flex: 1,
                  backgroundColor: "#fff",
                  flexDirection: "row"
                }}
              >
                <View
                  style={{
                    margin: 0,
                    paddingVertical: 14,
                    flex: 1,
                    alignSelf: "flex-start",
                    alignItems: "flex-start"
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "sf-text",
                      fontSize: 14,

                      color: "#212121",
                      backgroundColor: "#fff"
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "sf-text",
                      fontSize: 12,

                      color: "#717171",
                      backgroundColor: "#fff"
                    }}
                  >
                    {item.type}
                  </Text>
                </View>
                <View
                  style={{
                    margin: 0,
                    marginTop: -15,
                    paddnig: 0,
                    flex: 1,
                    alignSelf: "center",
                    alignItems: "flex-end"
                  }}
                >
                  <Icon name="Pen" height={16} width={16} fill="#717171" />
                </View>
              </View>
            );
          }}
        />
      );
    } else if (uiState == 1) {
      stateRenderData = <HitAutoComplete />;
    } else if (uiState == 2) {
      stateRenderData = <HitCardsAutoConplete defaultRefinement={search} />;
    }

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
        <StatusBar backgroundColor="#ff5a5f" barStyle="light-content" />
        <ScrollableTabView
          tabBarActiveTextColor="#ff5a5f"
          tabBarBackgroundColor="#fff"
          tabBarInactiveTextColor="#717171"
          activeTabTextStyle={{
            fontSize: 14,
            fontFamily: "sf-text",
            fontWeight: "900",
            width: "50%"
          }}
          tabBarTextStyle={{
            fontSize: 14,
            fontFamily: "sf-text",
            fontWeight: "normal",
            width: "50%"
          }}
          style={{
            margin: 0,
            backgroundColor: "#fff",
            flex: 1,
            shadowColor: "#19000000",
            shadowRadius: 3,
            elevation: 1,
            shadowOpacity: 0.2
          }}
          renderTabBar={() => (
            <TabBar
              underlineHeight={3}
              tabMargin={0}
              tabBarStyle={{
                margin: 0,
                padding: 0
              }}
              underlineColor="#ff5a5f"
              tabStyles={{
                tab: {
                  width: 180,
                  marginLeft: 0,
                  marginRight: 0,
                  padding: 0
                }
              }}
            />
          )}
        >
          <View tabLabel={{ label: "All Cannabis" }} label="All Cannabis">
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
                {stateRenderData}
              </InstantSearch>
            </View>
            <View style={{ height: 0.1, flex: 1 }} />
          </View>
          <View tabLabel={{ label: "My Cannabis" }} label="My Cannabis" />
        </ScrollableTabView>
        <View
          style={{
            margin: 0,
            height: 40,
            paddingBottom: 12,
            paddingTop: 12,
            backgroundColor: "#fff"
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              borderColor: "#33000000",
              flex: 1
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

    backgroundColor: "#f9faf9"
  }
});
