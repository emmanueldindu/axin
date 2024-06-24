import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons } from "@expo/vector-icons";
import Home from "../(tabs)/Home";
import Create from "../(tabs)/Create";
import Profile from "../(tabs)/Profile";
import Bookmark from "../(tabs)/Bookmark";

const Tab = createBottomTabNavigator();
const ButtonTab = () => {
  const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      // marginBottom: 10,
      elevation: 0,
      height: 85,
      backgroundColor: "black", // Set the background color to black
      borderRadius: 0, // Set the top-left border radius
    },
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                // name={focused ? "home" : "home-outline"}
                name="home"
                size={24}
                color={focused ? "#FF9C01" : "#828282"}
              />
            );
          },
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="create"
        component={Create}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                // name={focused ? "home" : "home-outline"}
                name="duplicate-outline"
                size={24}
                color={focused ? "#FF9C01" : "#828282"}
              />
            );
          },
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                // name={focused ? "home" : "home-outline"}
                name="person-outline"
                size={24}
                color={focused ? "#FF9C01" : "#828282"}
              />
            );
          },
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                // name={focused ? "home" : "home-outline"}
                name="bookmark-outline"
                size={24}
                color={focused ? "#FF9C01" : "#828282"}
              />
            );
          },
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default ButtonTab;
