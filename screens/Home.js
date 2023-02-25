import { Pressable } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "./AllEntries";
import OverLimitEntries from "./OverLimitEntries";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { darkslateblue } from "../colorHelper";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Home({ entries, removeEntry }) {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: "mediumslateblue" }}
      screenOptions={() => {
        return {
          tabBarStyle: { backgroundColor: "darkslateblue" },
          tabBarLabelStyle: { color: "white" },
          headerStyle: { backgroundColor: "darkslateblue" },
          headerTitleStyle: { color: "white" },
          headerRight: () => {
            return (
              <Pressable
                style={{ paddingRight: 10 }}
                onPress={() => navigation.navigate("Add")}
              >
                <Entypo name="plus" size={24} color="white" />
              </Pressable>
            );
          },
        };
      }}
    >
      <Tab.Screen
        name="All Entries"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="emoji-food-beverage"
              size={24}
              color={focused ? "yellow" : "white"}
            />
          ),
        }}
      >
        {(props) => (
          <AllEntries {...props} entries={entries} removeEntry={removeEntry} />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Over-limit Entries"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="exclamation-thick"
              size={24}
              color={focused ? "yellow" : "white"}
            />
          ),
        }}
      >
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
