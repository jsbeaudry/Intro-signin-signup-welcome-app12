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
import { Ionicons } from "@expo/vector-icons";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export default class Intro1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "transparent"
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            borderColor: "#CA80F3",
            borderWidth: 1,
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
            source={require("./Icon4.png")}
            style={{ width: 80, height: 80, marginTop: 0 }}
          />
        </View>
        <Text
          style={{
            color: "#C471F4",
            width: screenWidth - 150,
            marginTop: 100,
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          Keep you calendar and events up to date and ensure you never miss an
          appointment
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
            backgroundColor: "#C471F4",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center"
          }}
        >
          <Text style={{ color: "#fff" }}> Get start</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
