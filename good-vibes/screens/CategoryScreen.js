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
    return {
      title: `${navigation.state.params.categoryName || "Category Title"}`,
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
    this.state = {
      filterStrains: []
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
  }
  render() {
    return (
      <View style={{ paddingTop: 0, margin: 0, flex: 1 }}>
        <View
          style={{
            height: 40,
            backgroundColor: "#e6ffffff",
            flexDirection: "row",
            shadowColor: "#19000000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
            margin: 0
          }}
        >
          <Text style={styles.navButton}>Filters</Text>
          <Text style={styles.navButton}>Sativa</Text>
          <Text style={styles.navButton}>Indica</Text>
          <Text style={styles.navButton}>Hybrid</Text>
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
    marginRight: 17,
    marginLeft: 17,
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
