import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo";
import StrainData from "../components/StrainData";

// Import firebase
import firebase from "../Firebase";

class PopularStrains extends Component {
  // Init firebase and props in constructor
  constructor(props) {
    super(props);
    this.ref = firebase
      .firestore()
      .collection("strains2")
      .limit(6);
    // Paginate
    // this.ref.limit(10);
    this.unsubscribe = null;
    this.state = {
      strains: []
    };
  }

  // Hook on the backend collection
  onCollectionUpdate = querySnapshot => {
    // Temp array
    const strains = [];

    // get data
    querySnapshot.forEach(doc => {
      const { Name, Type, Rating, main_pic } = doc.data();

      // save to temp array
      strains.push({
        key: doc.id,
        strain_name: Name,
        type_slug: Type,
        ratings: Rating,
        main_pic: ""
      });
      // console.log("[+] Strain Data: " + doc.data());
    });

    this.setState({
      strains
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
            flex: 1,
            fontFamily: "cc-std-book",
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
        <LinearGradient colors={["#fff", "#f3f6f3"]}>
          <ScrollView
            style={{ marginTop: -41, paddingLeft: 15 }}
            horizontal={"true"}
            showsHorizontalScrollIndicator={false}
          >
            {this.state.strains.map((items, i) => (
              <StrainData
                key={i}
                style={{ marginRight: 10 }}
                strainName={items.strain_name}
                strainType={items.type_slug}
                strainRating={items.ratings}
                strainStars={items.ratings}
                strainURL={items.main_pic || "https://firebasestorage.googleapis.com/v0/b/waven-backend.appspot.com/o/strain-apollo-13_100x100_c83c-3-28.jpg?alt=media&token=8f9d72f6-1b3a-452c-9f2f-f61d3f21b5fa"}
              />
            ))}
          </ScrollView>
        </LinearGradient>
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
