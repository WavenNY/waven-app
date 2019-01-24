import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class ProductType extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={[
          this.props.style,
          {
            margin: 10,
            padding: 0,
            width: 75,
            height: 75,
            backgroundColor: "#fff",
            justifyContent: "center",
            shadowColor: "#330000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1
          }
        ]}
      >
        <Text
          style={{
            textAlignVertical: "center",
            textAlign: "center",
            fontSize: 14,
            fontFamily: "sf-text"
          }}
        >
          {this.props.title}
        </Text>
      </View>
    );
  }
}
export default ProductType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
