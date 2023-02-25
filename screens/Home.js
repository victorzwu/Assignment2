import { Pressable } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "./AllEntries";
import OverLimitEntries from "./OverLimitEntries";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Home({ entries, removeEntry }) {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={() => {
        return {
          headerRight: () => {
            return (
              <Pressable
                style={{ paddingRight: 10 }}
                onPress={() => navigation.navigate("Add")}
              >
                <Entypo name="plus" size={24} color="black" />
              </Pressable>
            );
          },
        };
      }}
    >
      <Tab.Screen name="All Entries">
        {(props) => (
          <AllEntries {...props} entries={entries} removeEntry={removeEntry} />
        )}
      </Tab.Screen>

      <Tab.Screen name="Over-limit Entries">
        {(props) => (
          <OverLimitEntries
            {...props}
            entries={entries}
            removeEntry={removeEntry}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
