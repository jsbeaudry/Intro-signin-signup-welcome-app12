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
        <View
          style={{
            flexDirection: "row",
            width: screenWidth,
            height: 50,
            alignItems: "space-between",
            position: "absolute",
            top: 30,
            right: 0
          }}
        >
          <Ionicons
            style={{ flex: 15, marginLeft: 20 }}
            name={Platform.OS == "ios" ? "ios-menu" : "md-menu"}
            size={30}
            color="#fff"
          />
          <Text
            style={{
              color: "#fff",
              flex: 70,
              fontSize: 15,
              textAlign: "center"
            }}
          >
            {"Create your account "}
          </Text>
          <Ionicons
            style={{ flex: 15 }}
            name={Platform.OS == "ios" ? "ios-person" : "md-person"}
            size={30}
            color="#fff"
          />
        </View>

        <Image
          source={require("./icon1.png")}
          style={{ width: 50, height: 50, marginTop: 150 }}
        />
        <View
          style={{
            backgroundColor: "#fff",
            position: "absolute",
            bottom: 0,
            left: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              marginTop: 50,
              flexDirection: "row",
              width: screenWidth,
              height: 50,
              borderBottomWidth: 0.4,
              borderBottomColor: "#000"
            }}
          >
            <Ionicons
              style={{ alignSelf: "flex-end", marginLeft: 20 }}
              name={Platform.OS == "ios" ? "ios-person" : "md-person"}
              size={30}
              color="#000"
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
                color: "#000",
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
              borderBottomColor: "#000"
            }}
          >
            <Ionicons
              style={{ alignSelf: "flex-end", marginLeft: 20 }}
              name={Platform.OS == "ios" ? "ios-mail" : "md-mail"}
              size={30}
              color="#000"
            />
            <TextInput
              placeholder={"Email"}
              keyboardType={"email-address"}
              returnKeyType="done"
              color={"#fff"}
              style={{
                height: 60,
                width: screenWidth - 70,
                padding: 20,
                color: "#000",
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
              borderBottomColor: "#000"
            }}
          >
            <Ionicons
              style={{ alignSelf: "flex-end", marginLeft: 24 }}
              name={Platform.OS == "ios" ? "ios-lock" : "md-lock"}
              size={30}
              color="#000"
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
                color: "#000",
                borderColor: "#e8eaed",
                borderWidth: 0
              }}
            />
          </View>
          <Text style={{ color: "#fff", alignSelf: "flex-end", margin: 20 }}>
            {" "}
            Forget password
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              width: 200,
              height: 70,
              marginBottom: 20,
              backgroundColor: "#C471F4",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "#fff" }}> Sign Up</Text>
          </View>
          <View
            style={{
              marginBottom: 100,
              flexDirection: "row",
              width: screenWidth,
              height: 50,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "#C471F4", marginRight: 30 }}>
              {" "}
              Already setup?
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Signin");
              }}
            >
              <Text style={{ color: "#C471F4" }}> Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({});
