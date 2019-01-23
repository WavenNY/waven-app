import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class CategoryScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Strain Types",
      headerStyle: {
        backgroundColor: "#ff5a5f"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        textAlign: "center"
      }
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>CategoryScreen</Text>
      </View>
    );
  }
}
export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
