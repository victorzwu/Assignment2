import { View, Text } from 'react-native'
import React from 'react'

export default function EditEntry({route}) {
    return (
    <View>
      <Text>{route.params.text}</Text>
    </View>
  )
}