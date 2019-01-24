import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

class CategoryScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: `${navigation.state.params.categoryName ||
        "Category Title"}`,
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
        <Text>
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
    backgroundColor: "#f3f6f3"
  }
});
