import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

class StrainTypes extends Component {
  render() {
    return (
      <View
        style={[
          this.props.style,
          {
            flex: 1,
            borderColor: "#33000000",
            backgroundColor: "#fff",
            paddingBottom: 10,
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
            flex: 1,
            fontSize: 16,
            paddingLeft: 20,
            paddingTop: 20,
            color: "#fff",
            alignItems: "flex-start",
            height: 135,
            backgroundColor: "#b0b0b0"
          }}
        >
          {this.props.titletext}
        </Text>
        <ScrollView
          style={{ marginTop: -41 }}
          horizontal={"true"}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}
export default StrainTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
