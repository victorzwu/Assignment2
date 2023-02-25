import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function Entry({onEntryPress, removeEntry, item}) {
  return (
    <Pressable>
        <Text>{item.text}</Text>
    </Pressable>
  )
}