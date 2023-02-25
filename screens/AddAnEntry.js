import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { useState } from "react";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function AddAnEntry({ addEntry }) {

const navigation = useNavigation();

  const [validCalories, setValidCalories] = useState(false);
  const [validText, setValidText] = useState(false);
  const [calories, setCalories] = useState("");
  const [text, setText] = useState("");

  function changedCalories(change) {
    setCalories(change);
    calories !== "" && !isNaN(calories) && calories > 0 ? setValidCalories(true) : setValidCalories(false);
  }

  function changedText(change) {
    setText(change);
    text !=="" ? setValidText(true) : setValidText(false);
  }

  function submit(calories, text){
    addEntry(calories, text)
    navigation.goBack()
  }

  return (
    <View>
      <Text>Calories</Text>
      <TextInput
        value={calories}
        onChangeText={(change) => {
          changedCalories(change);
        }}
      />
      <Text>Description</Text>
      <TextInput
        value={text}
        onChangeText={(change) => {
          changedText(change);
        }}
      />
      <Pressable
        onPress={() =>
          validCalories && validText
            ? submit(calories, text)
            : Alert.alert("Invalid input", "Please check your input values")
        }
      >
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
}
