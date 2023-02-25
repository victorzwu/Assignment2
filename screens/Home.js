import { View, Text, Pressable } from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "./AllEntries";
import OverLimitEntries from "./OverLimitEntries";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { firestore } from "../Firebase/firebase-setup";
import { collection, onSnapshot } from "firebase/firestore";
import { writeToDB } from "../Firebase/fireStoreHelper";

const Tab = createBottomTabNavigator();

export default function Home({route}) {

  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={() => {
        return {
          headerRight: () => {
            return (
              <Pressable
                style={{ paddingRight: 10 }}
                onPress={() =>
                  navigation.navigate("Add")
                }
              >
                <Entypo name="plus" size={24} color="black" />
              </Pressable>
            );
          },
        };
      }}
    >
      <Tab.Screen
        name="All Entries"
        component={AllEntries}
        initialParams={{ entries: route.params.entries }}
      />
      <Tab.Screen
        name="Over-limit Entries"
        component={OverLimitEntries}
        initialParams={{ entries: route.params.entries }}
      />
    </Tab.Navigator>
  );
}
