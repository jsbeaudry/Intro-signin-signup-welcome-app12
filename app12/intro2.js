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
            backgroundColor: "#fff",
            marginTop: 150,
            height: 150,
            width: 150,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            borderRadius: 75
          }}
        >
          <Image
            source={require("./Icon3.png")}
            style={{ width: 90, height: 96, marginTop: 0 }}
          />
        </View>
        <Text
          style={{
            color: "#fff",
            width: screenWidth - 150,
            marginTop: 100,
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          Sync your data from anywhere, anytime. If one device gets lost, you
          can still access it.
        </Text>

        <TouchableOpacity
          onPress={() => {
            this.props.go.navigation.navigate("Signin");
          }}
          style={{
            width: 200,
            height: 70,
            position: "absolute",
            bottom: 60,
            backgroundColor: "#fff",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "#C471F4" }}> Get start</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
