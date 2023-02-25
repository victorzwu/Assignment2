import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function Entry({ onEntryPress, removeEntry, item }) {
  return (
    <Pressable style = {styles.pressable}>
      <Text>{item.text}</Text>
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
