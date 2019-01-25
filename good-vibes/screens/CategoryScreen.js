import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ProgressBarAndroid,
  Image
} from "react-native";

import StrainCard from "../components/StrainCard";

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
        <StrainCard 
          title="Blue Dream"
          type="Indica"
          ratings={4.0}
          id = "1"
          desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
          lacus id sem facilisi vehic ut sed dui. Lorem ipsum calargare sitorm
          am…"
          image="https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/666001/b/girl-scout-cookies__primary_31a7.jpg"
        />
        <StrainCard title="Test Dream"
          type="Sativa"
          ratings={3.0}
          id = "1"
          desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
          lacus id sem facilisi vehic ut sed dui. Lorem ipsum calargare sitorm
          am…"
          image="https://d3ix816x6wuc0d.cloudfront.net/cdn/strain-photo/666001/b/girl-scout-cookies__primary_31a7.jpg"/>
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
