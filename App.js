import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddAnEntry from "./screens/AddAnEntry";
import AllEntries from "./screens/AllEntries";
import EditEntry from "./screens/EditEntry";
import OverLimitEntries from "./screens/OverLimitEntries";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name ="Edit" component = {EditEntry}/>
        <Stack.Screen name ="Add" component = {AddAnEntry}/>
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
