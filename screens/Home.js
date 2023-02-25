import { View, Text, Pressable } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "./AllEntries";
import OverLimitEntries from "./OverLimitEntries";
import { useNavigation } from '@react-navigation/native';
import AddAnEntry from "./AddAnEntry";
import { Entypo } from '@expo/vector-icons'; 



const Tab = createBottomTabNavigator();

export default function Home() {

    const navigation = useNavigation();
  return (
    <Tab.Navigator screenOptions={() => {
        return {
          headerRight: () => {
            return (
              <Pressable style = {{paddingRight: 10}}onPress={() => navigation.navigate('Add')}>
                <Entypo name="plus" size={24} color="black" />
              </Pressable>
            );
          },
        };
      }}>
      <Tab.Screen
        name="All Entries"
        component={AllEntries}
      />
      <Tab.Screen name="Over-limit Entries" component={OverLimitEntries} />
    </Tab.Navigator>
  );
}
