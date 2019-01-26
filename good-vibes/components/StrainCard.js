import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ProgressBarAndroid,
  Image
} from "react-native";

import Stars from "react-native-stars";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// Import firebase
import firebase from "../Firebase";

class StrainCard extends Component {
  // Init firebase and props in constructor
  constructor(props) {
    super(props);
    this.ref = firebase
      .firestore()
      .collection("strains")
      .doc(props.id)
      .collection("positive_effects");

    this.unsubscribe = null;
    this.state = {
      positiveEffects: []
    };
  }

  // Hook on the backend collection
  onCollectionUpdate = querySnapshot => {
    // temp array to hold data
    const positiveEffects = [];

    // get columns
    querySnapshot.forEach(doc => {
      //  console.debug(positive_effects);
      // Push to temp array

      positiveEffects.push({
        key: doc.id,
        doc
      });
    });

    // Set array globaly for consumption
    this.setState({
      positiveEffects
    });
  };

  // hook on component loading
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <View
        style={{
          marginTop: 38,
          marginBottom: 20,
          backgroundColor: "#fff",
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 44,
          paddingBottom: 20,
          shadowColor: "#330000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 1
        }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <Text
              style={{
                fontFamily: "sf-text",
                fontWeight: "bold",
                fontSize: 16,
                color: "#212121"
              }}
            >
              {this.props.title}
            </Text>
            <Text
              style={{
                fontFamily: "sf-text",
                fontSize: 12,
                color: "#717171"
              }}
            >
              {this.props.type}
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center", marginTop: -85 }}>
            <Image
              style={{
                height: 75,
                width: 75,
                alignSelf: "center",
                borderRadius: 75
              }}
              source={{
                uri: this.props.image
              }}
            />
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Stars
              default={this.props.ratings}
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
            <Text
              style={{
                fontFamily: "sf-text",
                fontSize: 22,
                color: "#212121"
              }}
            >
              {this.props.ratings}
            </Text>
            <Text
              style={{
                fontFamily: "sf-text",
                fontSize: 12,
                color: "#717171"
              }}
            >
              my rating
            </Text>
          </View>
        </View>

        {this.state.positiveEffects.map((item, i) => {
          return (
            <View
              style={{
                flex: 1,
                paddingLeft: 60,
                paddingRight: 60,
                marginTop: 10
              }}
            >
              <Text
                style={{
                  fontFamily: "sf-text",
                  color: "#212121",
                  fontSize: 12
                }}
              >
                {item.doc.data().effect_name}
              </Text>
              <ProgressBarAndroid
                styleAttr="Horizontal"
                color="#ff5a5f"
                progress={item.doc.data().scale / 10}
                indeterminate={false}
              />
            </View>
          );
        })}

        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "sf-text", color: "#666", fontSize: 14 }}>
            {this.props.desc}
          </Text>
        </View>
      </View>
    );
  }
}
export default StrainCard;

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
