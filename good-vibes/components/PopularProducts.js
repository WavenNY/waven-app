import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ProductData from "../components/ProductData";
import { LinearGradient } from "expo";

class PopularProducts extends Component {
  render() {
    return (
      <View
        style={[
          this.props.style,
          {
            flex: 1,
            borderColor: "#33000000",
            backgroundColor: "#f3f6f3",
            paddingBottom: 10
          }
        ]}
      >
        <Text
          style={{
            fontFamily: "cc-std-book",
            flex: 1,
            fontSize: 16,
            paddingLeft: 20,
            paddingTop: 40,
            color: "#212121",
            alignItems: "flex-start",
            height: 135,
            backgroundColor: "#f3f6f3"
          }}
        >
          {this.props.titletext}
        </Text>
        <LinearGradient colors={["#fff", "#f3f6f3"]}>
          <ScrollView
            style={{ marginTop: -41 }}
            horizontal={"true"}
            showsHorizontalScrollIndicator={false}
          >
            <ProductData
              style={{ marginLeft: 20, marginRight: 30 }}
              productName="Spectram Cannabis Oil"
              productType="CDB"
              productRating="3.5"
              productStars={3.5}
              productURL="https://ddd33q3967xhi.cloudfront.net/1UOATBAYEomQ0bzZzpw-eeWhdY0=/fit-in/1400x1400/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2fF0xt2gjaSOuw7kJZQZgb_300.png"
            />
            <ProductData
              style={{ marginRight: 30 }}
              productName="Spectram Cannabis Oil"
              productType="CDB"
              productRating="3.5"
              productStars={3.5}
              productURL="https://ddd33q3967xhi.cloudfront.net/1UOATBAYEomQ0bzZzpw-eeWhdY0=/fit-in/1400x1400/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2fF0xt2gjaSOuw7kJZQZgb_300.png"
            />
            <ProductData
              style={{ marginRight: 30 }}
              productName="Spectram Cannabis Oil"
              productType="CDB"
              productRating="3.5"
              productStars={3.5}
              productURL="https://ddd33q3967xhi.cloudfront.net/1UOATBAYEomQ0bzZzpw-eeWhdY0=/fit-in/1400x1400/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2fF0xt2gjaSOuw7kJZQZgb_300.png"
            />
            <ProductData
              style={{ marginRight: 30 }}
              productName="Spectram Cannabis Oil"
              productType="CDB"
              productRating="3.5"
              productStars={3.5}
              productURL="https://ddd33q3967xhi.cloudfront.net/1UOATBAYEomQ0bzZzpw-eeWhdY0=/fit-in/1400x1400/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2fF0xt2gjaSOuw7kJZQZgb_300.png"
            />
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}
export default PopularProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
