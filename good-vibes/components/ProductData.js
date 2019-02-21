import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Stars from "react-native-stars";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class ProductData extends Component {
  render() {
    return (
      <View
        style={[
          this.props.style,
          {
            margin: 0,
            padding: 0,
            width: 110,
            paddingLeft: 10,
            paddingRight: 10
          }
        ]}
      >
        <Image
          style={{
            height: 75,
            width: 75,
            alignSelf: "center",
            borderRadius: 0,
            backgroundColor: "#fff"
          }}
          source={{
            uri: this.props.productURL
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 12,
              color: "#212121",
              textAlign: "center",
              fontFamily: "sf-text",
              fontWeight: "bold"
            }}
          >
            {this.props.productName}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "#717171",
              textAlign: "center",
              fontFamily: "sf-text"
            }}
          >
            {this.props.productType}
          </Text>
          <View style={{ alignItems: "center" }}>
            <Stars
              default={parseInt(this.props.productStars)}
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
          </View>
          <Text
            style={{
              fontSize: 22,
              color: "#212121",
              textAlign: "center",
              fontFamily: "sf-text"
            }}
          >
            {this.props.productRating}
          </Text>
        </View>
      </View>
    );
  }
}
export default ProductData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  myStarStyle: {
    color: "#ff5a5f",
    backgroundColor: "transparent"
  },
  myEmptyStarStyle: {
    color: "#e7ede7"
  }
});
