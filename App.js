import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddAnEntry from './screens/AddAnEntry';
import AllEntries from './screens/AllEntries';
import EditEntry from './screens/EditEntry';
import OverLimitEntries from './screens/OverLimitEntries';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="All Entries" component={AllEntries} />
      <Tab.Screen name="Over-limit Entries" component={OverLimitEntries} />
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
