import { View, Text } from 'react-native'
import React from 'react'
import EntriesList from '../components/EntriesList'

export default function OverLimitEntries({entries, removeEntry}) {
    console.log(entries)
  return (
    <View>
      <EntriesList entries = {entries.filter(entry=> entry.calories>500)} removeEntry = {removeEntry}/>
    </View>
  )
}