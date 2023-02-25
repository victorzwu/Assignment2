import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddAnEntry from "./screens/AddAnEntry";
import AllEntries from "./screens/AllEntries";
import EditEntry from "./screens/EditEntry";
import OverLimitEntries from "./screens/OverLimitEntries";
import Home from "./screens/Home";
import { firestore } from "./Firebase/firebase-setup";
import { writeToDB } from "./Firebase/fireStoreHelper";
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "entries"),
      (querySnapshot) => {
        if (querySnapshot.empty) {
          setEntries([]);
        } else {
          let arr = [];
          querySnapshot.docs.forEach((snap) =>
            arr.push({ ...snap.data(), id: snap.id })
          );
          setEntries(arr);
        }
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  const [entries, setEntries] = useState([]);

  function addEntry(calories, text) {
    let entry = { calories: calories, text: text };
    writeToDB(entry);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
          initialParams={{ entries: entries }}
        />
        <Stack.Screen name="Edit" component={EditEntry} />
        <Stack.Screen name="Add">
          {(props) => <AddAnEntry {...props} addEntry={addEntry} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
