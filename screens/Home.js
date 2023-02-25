import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllEntries from './AllEntries';
import OverLimitEntries from './OverLimitEntries';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="All Entries" component={AllEntries} />
        <Tab.Screen name="Over-limit Entries" component={OverLimitEntries} />
    </Tab.Navigator>
  )
}