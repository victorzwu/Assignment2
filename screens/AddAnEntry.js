import { View, Text, TextInput} from 'react-native'
import React from 'react'

export default function AddAnEntry({route}) {
    const [validCalories, setValidCalories] = useState(false);
    const [validText, setValidText] = useState(false);
    const [calories, setCalories] = useState("");
    const [text, setText] = useState("");
  return (
    <View>
      <TextInput />
      <Pressable onPress = {()=> route.params.addEntry(calories, text)}>Submit</Pressable>
    </View>
  )
}