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
          flexDirection: "column",
          backgroundColor: "#fff",
          alignItems: "center"
        }}
      >
        <Image
          source={require("./R.png")}
          style={{ width: 80, height: 80, marginTop: 150 }}
        />
        <View
          style={{
            marginTop: 50,
            flexDirection: "row",
            width: screenWidth,
            height: 50,
            borderBottomWidth: 0.4,
            borderBottomColor: "#fff"
          }}
        >
          <Ionicons
            style={{ alignSelf: "flex-end", marginLeft: 20 }}
            name={Platform.OS == "ios" ? "ios-person" : "md-person"}
            size={30}
            color="#fff"
          />
          <TextInput
            placeholder={"Email or Username"}
            keyboardType={"email-address"}
            returnKeyType="done"
            color={"#fff"}
            style={{
              height: 60,
              width: screenWidth - 70,
              padding: 20,
              color: "#fff",
              borderColor: "#e8eaed",
              borderWidth: 0
            }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            width: screenWidth,
            height: 50,
            borderBottomWidth: 0.4,
            borderBottomColor: "#fff"
          }}
        >
          <Ionicons
            style={{ alignSelf: "flex-end", marginLeft: 20 }}
            name={Platform.OS == "ios" ? "ios-lock" : "md-lock"}
            size={30}
            color="#fff"
          />
          <TextInput
            placeholder={"Password"}
            keyboardType={"email-address"}
            returnKeyType="done"
            color={"#fff"}
            style={{
              height: 60,
              width: screenWidth - 70,
              padding: 20,
              color: "#fff",
              borderColor: "#e8eaed",
              borderWidth: 0
            }}
          />
        </View>
        <Text style={{ color: "#fff", alignSelf: "flex-end", margin: 20 }}>
          {" "}
          Forget password
        </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Finish");
          }}
          style={{
            marginTop: 10,
            flexDirection: "row",
            width: 200,
            height: 50,
            backgroundColor: "#fff",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "#C471F4" }}>Sign in</Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 50,
            flexDirection: "row",
            width: screenWidth,
            height: 50,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "#fff", marginRight: 30 }}>
            {" "}
            Not setup yet?
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Signup");
            }}
          >
            <Text style={{ color: "#fff" }}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({});
