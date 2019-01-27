import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ProgressBarAndroid,
  Image
} from "react-native";

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
    this.ref = firebase.firestore().collection("strains");
    this.unsubscribe = null;
    this.subheaderRef = null;

    this.state = {
      filterStrains: [],
      subHeaderItems: []
    };
  }

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
      filterStrains
    });
  };

  // hook on component loading
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    this.subheaderRef =
      this.props.navigation.state.params.db === "strains"
        ? firebase.firestore().collection("strain_types")
        : firebase.firestore().collection("product_types");

    console.debug("DB: " + this.props.navigation.state.params.db);
    this.subheaderRef.onSnapshot(qSnapshot => {
      const docs = qSnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      }));
      this.setState({
        subHeaderItems: docs
      });
      console.debug("Docs data:");
      console.debug(JSON.stringify(docs));
      console.debug(this.props);
    });
  }
  render() {
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
 <Image
          style={{
            height: 12,
            width: 12,
            alignSelf: "center",
            borderRadius: 0
          }}
          source={
             require("../assets/icons/Filters.png")
          }
        />          <Text style={styles.navButton}>Filters</Text>
          <View
            style={{ border: 1, width: 1, height: 20, borderColor: "e0e0e0" }}
          />
          <ScrollView
            horizontal={"true"}
            showsHorizontalScrollIndicator={false}
          >
            {this.state.subHeaderItems.map((item, i) => {
              return (
                <Text id={item.id} style={styles.navButton}>
                  {item.data.category_name}
                </Text>
              );
            })}
          </ScrollView>
        </View>
        <ScrollView style={styles.container}>
          <View>
            <Text
              style={{ fontFamily: "sf-text", fontSize: 16, color: "#717171" }}
            >
              {this.state.filterStrains.length} Total
            </Text>
          </View>
          {this.state.filterStrains.map((item, i) => {
            return (
              <StrainCard
                title={item.doc.data().strain_name}
                type={this.props.navigation.state.params.categoryName}
                ratings={item.doc.data().ratings}
                id={item.doc.id}
                desc={item.doc.data().strain_desc}
                image={item.doc.data().main_pic}
                positive_effects=""
              />
            );
          })}
        </ScrollView>
      </View>
    );
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
    fontSize: 14
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
  }
});
