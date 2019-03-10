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
    this.ref = firebase
      .firestore()
      .collection("latestprods")
      .limit(6)
      .orderBy("StarRatings", "desc");
    // // paginate
    // this.ref.limit(10);
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
      const { ProductName, category_name, StarRatings, imageUrl } = doc.data();

      // save to temp array
      products.push({
        key: doc.id,
        ProductName,
        category_name,
        StarRatings,
        main_pic: imageUrl
      });
      // console.log("[+] Product Data: " + doc.data());
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
                key={i}
                style={{ marginRight: 30 }}
                productName={items.ProductName}
                productType={items.category_name}
                productRating={items.StarRatings || 0}
                productStars={items.StarRatings || 0}
                productURL={
                  items.main_pic ||
                  "https://storage.googleapis.com/waven-backend.appspot.com/uploads/prod.png"
                }
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
