import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ProgressBarAndroid,
  Image
} from "react-native";
import Stars from "react-native-stars";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class CategoryScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.params.categoryName || "Category Title"}`,
      headerStyle: {
        backgroundColor: "#ff5a5f"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        textAlign: "center"
      }
    };
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text
            style={{ fontFamily: "sf-text", fontSize: 16, color: "#717171" }}
          >
            1122 Total
          </Text>
        </View>
        <View
          style={{
            marginTop: 38,
            backgroundColor: "#fff",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 44,
            paddingBottom: 20,
            shadowColor: "#330000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1
          }}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1, alignItems: "flex-start" }}>
              <Text
                style={{
                  fontFamily: "sf-text",
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "#212121"
                }}
              >
                Blue Dream
              </Text>
              <Text
                style={{
                  fontFamily: "sf-text",
                  fontSize: 12,
                  color: "#717171"
                }}
              >
                Indica
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center", marginTop: -85 }}>
              <Image
                style={{
                  height: 75,
                  width: 75,
                  alignSelf: "center",
                  borderRadius: 75
                }}
                source={{
                  uri:
                    "https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/666001/b/girl-scout-cookies__primary_31a7.jpg"
                }}
              />
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Stars
                default={4}
                disabled={true}
                count={5}
                half={true}
                starSize={51}
                fullStar={<Icon name={"star"} style={[styles.myStarStyle]} />}
                emptyStar={
                  <Icon
                    name={"star-outline"}
                    style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                  />
                }
                halfStar={
                  <Icon name={"star-half"} style={[styles.myStarStyle]} />
                }
              />
              <Text
                style={{
                  fontFamily: "sf-text",
                  fontSize: 22,
                  color: "#212121"
                }}
              >
                4.0
              </Text>
              <Text
                style={{
                  fontFamily: "sf-text",
                  fontSize: 12,
                  color: "#717171"
                }}
              >
                my rating
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              paddingLeft: 60,
              paddingRight: 60,
              marginTop: 10
            }}
          >
            <Text
              style={{ fontFamily: "sf-text", color: "#212121", fontSize: 12 }}
            >
              Relaxed
            </Text>
            <ProgressBarAndroid
              styleAttr="Horizontal"
              color="#ff5a5f"
              progress={0.5}
              indeterminate={false}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{ fontFamily: "sf-text", color: "#666", fontSize: 14 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
              lacus id sem facilisi vehic ut sed dui. Lorem ipsum calargare
              sitorm am…
            </Text>
          </View>
        </View>

        <Text style={{ marginTop: 20 }}>
          Database to be attached:{" "}
          {this.props.navigation.state.params.db || "Default DB"}
        </Text>
      </ScrollView>
    );
  }
}
export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    backgroundColor: "#f3f6f3"
  },
  myStarStyle: {
    color: "#ff5a5f",
    backgroundColor: "transparent"
  },
  myEmptyStarStyle: {
    color: "#e7ede7"
  }
});
