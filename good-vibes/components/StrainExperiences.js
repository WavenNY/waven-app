import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class StrainExperiences extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>StrainExperiences</Text>
      </View>
    );
  }
}
export default StrainExperiences;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
