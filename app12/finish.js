import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Dimensions,
  ImageBackground,
  Text,
  View,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export default class Intro1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ImageBackground
        source={require("./bg.png")}
        style={{
          flex: 1,
          width: screenWidth,
          flexDirection: "column",
          backgroundColor: "#fff",
          alignItems: "center"
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            marginTop: 150,
            height: 200,
            width: 200,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            borderRadius: 100
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(255,255,255,0.5)",
              marginTop: 0,
              height: 160,
              width: 160,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              borderRadius: 80
            }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                marginTop: 0,
                height: 120,
                width: 120,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                borderRadius: 60
              }}
            >
              <Image
                source={require("./Check.png")}
                style={{ width: 60, height: 60, marginTop: 0 }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            width: 200,
            height: 70,
            position: "absolute",
            bottom: 200,
            backgroundColor: "#fff",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "#C471F4" }}> Finish</Text>
        </View>
      </ImageBackground>
    );
  }
}
