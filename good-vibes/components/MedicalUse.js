import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import OutlineButton from "../components/OutlineButton";
import MedicalEffect from "../components/MedicalEffect";

class MedicalUse extends Component {
  _onPressTest = () => alert("hi");
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={{ fontSize: 12, color: "#717171" }}>Medical Use</Text>
      //   <Text style={{ fontSize: 14, color: "#212121", marginTop: 10 }}>
      //     I am looking to better my
      //   </Text>
      //   <View
      //     style={{
      //       flex: 1,
      //       flexDirection: "row",
      //       alignContent: "space-between",
      //       marginTop: 10
      //     }}
      //   >
      //     <OutlineButton
      //       title="Depression"
      //       onPress={() => alert("depression")}
      //     />
      //     <OutlineButton title="Stress" onPress={() => alert("stress")} />
      //     <OutlineButton title="Fatigue" onPress={() => alert("fatigue")} />
      //   </View>
      //   <View
      //     style={{
      //       flex: 1,
      //       flexDirection: "row",
      //       alignContent: "space-between",
      //       marginTop: 10
      //     }}
      //   >
      //     <OutlineButton title="Pain" onPress={() => alert("pain")} />
      //     <OutlineButton title="Headache" onPress={() => alert("headache")} />
      //     <OutlineButton title="Appetite" onPress={() => alert("appetite")} />
      //   </View>
      // </View>
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
        >
          <MedicalEffect title="Stress" />
          <MedicalEffect title="Depression" />
          <MedicalEffect title="Fatigue" />
          <MedicalEffect title="Pain" />
        </ScrollView>
      </View>
    );
  }
}
export default MedicalUse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 23,
    paddingLeft: 30,
    paddingRight: 30,
    shadowColor: "#330000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  }
});
