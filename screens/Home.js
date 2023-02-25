import { View, Text, Pressable } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "./AllEntries";
import OverLimitEntries from "./OverLimitEntries";
import { useNavigation } from '@react-navigation/native';
import AddAnEntry from "./AddAnEntry";
import { FontAwesome } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();

export default function Home() {

    const navigation = useNavigation();
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={() => {
          return {
            headerRight: () => {
              return (
                <Pressable onPress={() => navigation.navigate('Add')}>
                  <FontAwesome name="font-awesome" size={24} color="black" />
                </Pressable>
              );
            },
          };
        }}
        name="All Entries"
        component={AllEntries}
      />
      <Tab.Screen name="Over-limit Entries" component={OverLimitEntries} />
    </Tab.Navigator>
  );
}
