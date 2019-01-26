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

class StrainCard extends Component {
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
              4.0
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

        <View
          style={{
            flex: 1,
            paddingLeft: 60,
            paddingRight: 60,
            marginTop: 10
          }}
        >
          <Text
            style={{ fontFamily: "sf-text", color: "#212121", fontSize: 12 }}
          >
            Relaxed
          </Text>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            color="#ff5a5f"
            progress={0.5}
            indeterminate={false}
          />
        </View>
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
