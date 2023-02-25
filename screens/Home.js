import { View, Text, Pressable } from "react-native";
import { useState } from "react";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "./AllEntries";
import OverLimitEntries from "./OverLimitEntries";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Home() {
  const navigation = useNavigation();
  //const [entries, setEntries] = useState([]);
  const entries = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      text: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      text: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      text: "Third Item",
    },
  ];

  function addEntry(calories, text)
  {
    let entry = {calories: calories, text: text}
  }

  return (
    <Tab.Navigator
      screenOptions={() => {
        return {
          headerRight: () => {
            return (
              <Pressable
                style={{ paddingRight: 10 }}
                onPress={() => navigation.navigate("Add", {addEntry: addEntry()})}
              >
                <Entypo name="plus" size={24} color="black" />
              </Pressable>
            );
          },
        };
      }}
    >
      <Tab.Screen name="All Entries" component={AllEntries} initialParams={{ entries: entries }}/>
      <Tab.Screen name="Over-limit Entries" component={OverLimitEntries} initialParams={{ entries: entries }} />
    </Tab.Navigator>
  );
}
