import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AddAnEntry, AllEntries, EditEntry, OverLimitEntries} from './Screens/AddAnEntry';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="All Entries" component={AllEntries} />
      <Stack.Screen name="Over-limit Entries" component={OverLimitEntries} />
      </Stack.Navigator>
      <Tab.Navigator>
      <Stack.Screen name="All Entries" component={AllEntries} />
      <Stack.Screen name="Over-limit Entries" component={OverLimitEntries} />
      </Tab.Navigator>
    </NavigationContainer>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
