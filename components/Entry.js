import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


export default function Entry({ removeEntry, item }) {
    const navigation = useNavigation();

    function onEntryPress(item)
    {
        navigation.navigate('Edit', {text: item.text})
    }

  return (
    <Pressable style = {styles.pressable} onPress = {()=>onEntryPress(item)}>
      <Text>{item.text}</Text>
      <Pressable onPress = {removeEntry}></Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    borderColor: "grey",
    backgroundColor: "grey",
    borderRadius: 5,
    borderWidth: 2,
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
