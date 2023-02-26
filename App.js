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
import { editFromDB, writeToDB } from "./Firebase/fireStoreHelper";
import { deleteFromDB } from "./Firebase/fireStoreHelper";
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { primaryColor, secondaryColor, tertiarycolor } from "./colorHelper";

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
    let overLimit = false;
    if (calories > 500) {
      overLimit = true;
    }
    let entry = { calories: calories, text: text, overLimit: overLimit };
    writeToDB(entry);
  }

  function removeEntry(id) {
    deleteFromDB(id);
  }

  function editOverLimit(id) {
    editFromDB(id);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: { color: "white" },
          headerStyle: { backgroundColor: primaryColor },
          contentStyle: { backgroundColor: secondaryColor },
        }}
      >
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          initialParams={{ entries: entries }}
        >
          {(props) => (
            <Home {...props} entries={entries} removeEntry={removeEntry} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Edit Entry">
          {(props) => (
            <EditEntry
              {...props}
              removeEntry={removeEntry}
              editOverLimit={editOverLimit}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Add An Entry">
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
