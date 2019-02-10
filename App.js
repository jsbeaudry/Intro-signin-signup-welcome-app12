import React from "react";
import { View, Text, Platform } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import App12 from "./app12/home";
import Signin2 from "./app12/signin";
import Signup2 from "./app12/signup";
import Finish from "./app12/finish";

import { Ionicons } from "@expo/vector-icons";

const A12 = createStackNavigator({
  home: {
    screen: App12,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  },
  Signup: {
    screen: Signup2,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  },
  Signin: {
    screen: Signin2,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  },
  Finish: {
    screen: Finish,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  }
});

export default createAppContainer(A12);
