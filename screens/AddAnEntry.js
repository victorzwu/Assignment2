import { View, Text, TextInput, Pressable} from 'react-native'
import { useState } from 'react';
import React from 'react'

export default function AddAnEntry({addEntry}) {
    const [validCalories, setValidCalories] = useState(false);
    const [validText, setValidText] = useState(false);
    const [calories, setCalories] = useState("");
    const [text, setText] = useState("");
  return (
    <View>
      <TextInput />
      <Pressable onPress = {()=> addEntry(calories, text)}><Text>Submit</Text></Pressable>
    </View>
  )
}