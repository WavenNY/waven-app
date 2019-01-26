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
        backgroundColor: "#ff5a5f"
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
      //const { category_name, subcat_id } = doc.data();
      //  console.info(doc.data());
      if (doc.data().type_id == this.props.navigation.state.params.typeId) {
        // Push to temp array
        filterStrains.push({
          key: doc.id,
          doc
        });
      }
    });

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
              id={i}
              desc={item.doc.data().strain_desc}
              image={item.doc.data().main_pic}
            />
          );
        })}

        <Text style={{ marginTop: 20, marginBottom: 40 }}>
          Database attached:{" "}
          {this.props.navigation.state.params.db || "Default DB"}
        </Text>
      </ScrollView>
    );
  }
}
export default CategoryScreen;

const styles = StyleSheet.create({
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
