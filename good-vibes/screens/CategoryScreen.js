import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ProgressBarAndroid,
  Image,
  ActivityIndicator,
  FlatList
} from "react-native";
import { default as Sicon } from "../components/SvgIcon";
import { AppLoading } from "expo";

import StrainCard from "../components/StrainCard";

// Import firebase
import firebase from "../Firebase";

class CategoryScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const headerTitleText =
      navigation.state.params.db === "strains" ? "Strains" : "Products";
    return {
      title: `${headerTitleText}`,
      headerStyle: {
        backgroundColor: "#ff5a5f",
        textAlign: "center"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        textAlign: "center"
      }
    };
  };

  // Init firebase and props in constructor
  constructor(props) {
    super(props);

    this.ref = firebase.firestore().collection("strains2");

    this.unsubscribe = null;
    this.subheaderRef = null;

    this.testData =
      props.navigation.state.params.db.indexOf("products") == 0
        ? firebase
            .firestore()
            .collection("latestprods")
            .where(
              "category_name",
              "==",
              props.navigation.state.params.categoryName
            )
        : firebase
            .firestore()
            .collection("strains2")
            .where("Type", "==", props.navigation.state.params.categoryName);

    this.state = {
      filterStrains: [],
      subHeaderItems: [],
      isLoadingComplete: false
    };
  }

  // Hook on the backend collection
  onCollectionUpdateTest = querySnapshot => {
    // temp array to hold data
    const filterStrains = [];

    // get columns
    querySnapshot.docs.map(doc => {
      //  console.debug(positive_effects);

      filterStrains.push({
        key: doc.id,
        doc
      });
    });
    // Set array globaly for consumption
    this.setState({
      filterStrains,
      isLoadingComplete: true
    });
  };

  // Hook on the backend collection
  onCollectionUpdate = querySnapshot => {
    // temp array to hold data
    const filterStrains = [];

    // get columns
    querySnapshot.forEach(doc => {
      //  console.debug(positive_effects);
      if (doc.data().type_id == this.props.navigation.state.params.typeId) {
        // Push to temp array

        filterStrains.push({
          key: doc.id,
          doc
        });
      }
    });

    // console.info("Logging");
    // console.info(positive_effects.length);
    // console.info("Logging End");

    // Set array globaly for consumption
    this.setState({
      filterStrains,
      isLoadingComplete: true
    });
  };

  // hook on component loading
  componentDidMount() {
    //  this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    this.unsubscribe = this.testData.onSnapshot(
      { includeMetadataChanges: true },
      this.onCollectionUpdateTest
    );
    this.subheaderRef =
      this.props.navigation.state.params.db === "strains"
        ? firebase.firestore().collection("strain_types")
        : firebase.firestore().collection("product_types");

    this.subheaderRef.onSnapshot(qSnapshot => {
      const docs = qSnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      }));
      this.setState({
        subHeaderItems: docs
      });
    });
  }

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <ActivityIndicator
          color="#ff5a5f"
          size="large"
          style={styles.activityIndicator}
        />
      );
    } else {
      return (
        <View style={{ paddingTop: 0, margin: 0, flex: 1 }}>
          <View
            style={{
              height: 40,
              backgroundColor: "#fff",
              flexDirection: "row",
              shadowColor: "#19000000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 1,
              margin: 0
            }}
          >
            <Sicon
              name="Filters"
              height={12}
              width={13}
              viewBox="0 0 13 12"
              fill="#ff5a5f"
              style={{
                alignSelf: "center",
                alignSelf: "center",
                borderRadius: 0,
                marginLeft: 20,
                marginRight: 4
              }}
            />

            <Text style={[styles.navButton, { marginLeft: 0, paddingLeft: 0 }]}>
              Filters
            </Text>
            <View
              style={{
                borderWidth: 0.5,
                width: 0.5,
                height: 20,
                borderColor: "#e0e0e0",
                alignSelf: "center",
                marginRight: 10,
                marginTop: 10,
                marginBottom: 10
              }}
            />
            <ScrollView
              horizontal={"true"}
              showsHorizontalScrollIndicator={false}
            >
              {this.state.subHeaderItems.map((item, i) => {
                let txtStyle = [];
                if (
                  this.props.navigation.state.params.categoryName.indexOf(
                    item.data.category_name
                  ) == 0
                ) {
                  txtStyle = [
                    styles.navButton,
                    {
                      borderRadius: 10,
                      color: "#fff",
                      backgroundColor: "#717171"
                    }
                  ];
                } else {
                  txtStyle = styles.navButton;
                }
                return (
                  <Text id={item.id} style={txtStyle} key={i}>
                    {item.data.category_name}
                  </Text>
                );
              })}
            </ScrollView>
          </View>
          <ScrollView style={styles.container}>
            <View>
              <Text
                style={{
                  fontFamily: "sf-text",
                  fontSize: 16,
                  color: "#717171"
                }}
              >
                {this.state.filterStrains.length} Total
              </Text>
            </View>

            <FlatList
              data={this.state.filterStrains}
              renderItem={({ item }) => (
                <StrainCard
                  title={item.doc.data().Name || item.doc.data().ProductName}
                  type={this.props.navigation.state.params.categoryName}
                  ratings={
                    item.doc.data().Rating ||
                    (item.doc.data().StarRating
                      ? item.doc.data().StarRating.substring(0, 3)
                      : false) ||
                    parseFloat(Math.random() * 4 + 1).toFixed(1)
                  }
                  id={item.doc.id}
                  desc={item.doc.data().ProductDescription}
                  image={
                    item.doc.data().imageUrl ||
                    "https://ddd33q3967xhi.cloudfront.net/OOyks6bxS8K8QF2NskhMGVVM4RA=/fit-in/700x700/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2fqGlQJnAwSxmlWz41z3yR_yocan-magneto-black.jpg"
                  }
                  positiveEffects={item.doc.data().Effects || []}
                />
              )}
            />
          </ScrollView>
        </View>
      );
    }
  }
}
export default CategoryScreen;

const styles = StyleSheet.create({
  navButton: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 8,
    marginTop: 8,
    marginBottom: 8,
    fontFamily: "sf-text",
    color: "#717171",
    fontSize: 14,
    height: 24
  },

  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    backgroundColor: "#f3f6f3"
  },
  myStarStyle: {
    color: "#ff5a5f",
    backgroundColor: "transparent"
  },
  myEmptyStarStyle: {
    color: "#e7ede7"
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80
  }
});
