import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ProductData from "../components/ProductData";
import { LinearGradient } from "expo";

// Import firebase
import firebase from "../Firebase";

class PopularProducts extends Component {
  // Init firebase and props in constructor
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("products");
    this.unsubscribe = null;
    this.state = {
      products: []
    };
  }

  // Hook on the backend collection
  onCollectionUpdate = querySnapshot => {
    // Temp array
    const products = [];

    // get data
    querySnapshot.forEach(doc => {
      const { product_name, type_slug, ratings, main_pic } = doc.data();

      // save to temp array
      products.push({
        key: doc.id,
        doc,
        product_name,
        type_slug,
        ratings,
        main_pic
      });
    });

    this.setState({
      products
    });
  };

  // hook on component loading
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
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
            style={{ marginTop: -41, paddingLeft: 20 }}
            horizontal={"true"}
            showsHorizontalScrollIndicator={false}
          >
            {this.state.products.map((items, i) => (
              <ProductData
                style={{ marginRight: 30 }}
                productName={items.product_name}
                productType={items.type_slug}
                productRating={items.ratings}
                productStars={items.ratings}
                productURL={items.main_pic}
              />
            ))}
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
