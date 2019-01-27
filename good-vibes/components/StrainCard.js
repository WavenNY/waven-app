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
import { default as Sicon } from "../components/SvgIcon";
import { Constants, Svg } from "expo";

// Import firebase
import firebase from "../Firebase";

const svgPen = (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 15 15"
  >
    <Svg.Path
      fill="#ff5a5f"
      d="M17.7033644,0.805056311 C16.6282225,-0.268352104 14.8870092,-0.268352104 13.8118673,0.805056311 L12.8376169,1.78489558 L2.46763015,12.1502739 L2.44561319,12.1722928 C2.44010896,12.1777975 2.44010896,12.1833022 2.43460472,12.1833022 C2.42359624,12.1998164 2.40708352,12.2163305 2.39607504,12.2328447 C2.39607504,12.2383494 2.3905708,12.2383494 2.3905708,12.2438541 C2.37956232,12.2603682 2.37405808,12.2713777 2.36304961,12.2878918 C2.35754537,12.2933965 2.35754537,12.2989012 2.35204113,12.304406 C2.34653689,12.3209201 2.34103265,12.3319295 2.33552841,12.3484437 C2.33552841,12.3539484 2.33002417,12.3539484 2.33002417,12.3594531 L0.0292521589,19.2788799 C-0.0382084919,19.4758798 0.0131361116,19.6941132 0.161353901,19.8403608 C0.265459653,19.9430529 0.405930197,20.0004331 0.552154889,19.9999975 C0.611849586,19.9989276 0.671114803,19.9896666 0.728290545,19.972474 L7.64161506,17.6659984 C7.6471193,17.6659984 7.6471193,17.6659984 7.65262354,17.6604937 C7.67007854,17.6554903 7.68675149,17.6480794 7.70216169,17.6384748 C7.70633555,17.637897 7.71020366,17.6359628 7.71317017,17.6329701 C7.72968289,17.6219607 7.75169984,17.6109512 7.76821256,17.5999418 C7.78472528,17.5889324 7.801238,17.5724182 7.81775071,17.5614088 C7.82325495,17.5559041 7.82875919,17.5559041 7.82875919,17.5503994 C7.83426343,17.5448946 7.84527191,17.5393899 7.85077615,17.5283805 L19.1950133,6.18316287 C20.2683289,5.10792799 20.2683289,3.36656424 19.1950133,2.29132936 L17.7033644,0.805056311 Z M3.3369843,13.3333333 L6.66666667,16.6666667 L1.66666667,18.3333333 L3.3369843,13.3333333 Z M18.6729162,5.23270645 L18.0773271,5.83333333 L14.1666667,1.92645189 L14.7678745,1.325825 C15.4259837,0.669169443 16.4921217,0.669169443 17.1502309,1.325825 L18.6785349,2.85265223 C19.331562,3.51278548 19.3290528,4.57565787 18.6729162,5.23270645 Z"
    />
  </Svg>
);

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
        <View style={{ marginTop: 10, flexDirection: "row" }}>
          <Sicon
            name="Pen"
            height={10}
            width={10}
            viewBox="0 0 10 10"
            fill="#ff5a5f"
            style={{ alignSelf: "center" }}
          />
          <Text
            style={{ fontFamily: "sf-text", color: "#212121", fontSize: 12 }}
          >
            Reviewed by me on 11.12.18
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
