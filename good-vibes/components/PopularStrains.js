import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import StrainData from "../components/StrainData";

class PopularStrains extends Component {
  render() {
    return (
      <View
        style={[
          this.props.style,
          {
            flex: 1,
            borderColor: "#33000000",
            backgroundColor: "#fff",
            paddingBottom: 10
          }
        ]}
      >
        <Text
          style={{
            flex: 1,
            fontSize: 16,
            paddingLeft: 20,
            paddingTop: 50,
            color: "#212121",
            alignItems: "flex-start",
            height: 145,
            backgroundColor: "#f3f6f3"
          }}
        >
          Popular Strains
        </Text>
        <ScrollView
          style={{ marginTop: -41 }}
          horizontal={"true"}
          showsHorizontalScrollIndicator={false}
        >
          <StrainData
            style={{ marginLeft: 15, marginRight: 10 }}
            strainName="Blue Dream"
            strainType="Indica"
            strainRating="2.5"
            strainStars={2.5}
            strainURL="https://leafly-s3.s3.amazonaws.com/leafly/reviews/blue-dream_100x100_189e.jpg"
          />
          <StrainData
            style={{ marginRight: 10 }}
            strainName="Blue Dream"
            strainType="Indica"
            strainRating="4.0"
            strainStars={4}
            strainURL="https://leafly-s3.s3.amazonaws.com/leafly/reviews/blue-dream_100x100_189e.jpg"
          />
          <StrainData
            style={{ marginRight: 10 }}
            strainName="Blue Dream"
            strainType="Indica"
            strainRating="4.0"
            strainStars={4}
            strainURL="https://leafly-s3.s3.amazonaws.com/leafly/reviews/blue-dream_100x100_189e.jpg"
          />
          <StrainData
            style={{ marginRight: 10 }}
            strainName="Blue Dream"
            strainType="Indica"
            strainStars="3.5"
            strainRating={3.5}
            strainURL="https://leafly-s3.s3.amazonaws.com/leafly/reviews/blue-dream_100x100_189e.jpg"
          />
        </ScrollView>
      </View>
    );
  }
}
export default PopularStrains;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
