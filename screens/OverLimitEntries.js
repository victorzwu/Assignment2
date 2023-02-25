import { View, Text } from 'react-native'
import React from 'react'
import EntriesList from '../components/EntriesList'

export default function OverLimitEntries({entries, removeEntry}) {
  return (
    <View>
      <EntriesList entries = {entries} removeEntry = {removeEntry}/>
    </View>
  )
}