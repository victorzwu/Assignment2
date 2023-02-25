import { View, Text } from 'react-native'
import React from 'react'
import EntriesList from '../components/EntriesList'

export default function OverLimitEntries({entries}) {
  return (
    <View>
      <EntriesList entries = {entries}/>
    </View>
  )
}