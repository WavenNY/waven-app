import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

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
          <Text style={{ fontFamily: "sf-text", fontSize: 16 }}>
            1122 Total
          </Text>
        </View>
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
