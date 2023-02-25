import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


export default function Entry({ removeEntry, item }) {
    const navigation = useNavigation();

    function onEntryPress(item)
    {
        navigation.navigate('Edit', {item: item})
    }

  return (
    <Pressable style = {styles.pressable} onPress = {()=>onEntryPress(item)}>
      <Text>{item.text}</Text>
      {item.overLimit && <Text>!</Text>}
      <Pressable onPress = {()=>removeEntry(item.id)}><Text>X</Text></Pressable>
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
