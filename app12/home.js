import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Dimensions,
  Text,
  View,
  Image
} from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";

import P1 from "./intro1";
import P2 from "./intro2";
import P3 from "./intro3";
export default class Intro1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        index={this.state.index}
        dot={
          <View
            style={{
              backgroundColor: "grey",
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: screenHeight - 100
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: "#CA80F3",
              width: 13,
              height: 13,
              borderRadius: 50,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: screenHeight - 100
            }}
          />
        }
      >
        <View style={styles.slide1}>
          <P1 go={this.props} />
        </View>
        <View style={styles.slide2}>
          <P2 go={this.props} />
        </View>
        <View style={styles.slide3}>
          <P3 go={this.props} />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});
