import { View, Text } from 'react-native'
import React from 'react'
import EntriesList from '../components/EntriesList'

export default function AllEntries({route}) {
  return (
    <View>
      <EntriesList entries={route.params.entries}/>
    </View>
  )
}