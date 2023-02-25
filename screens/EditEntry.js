import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function EditEntry({ route, removeEntry, editOverLimit }) {
  const navigation = useNavigation();

  function remove(id) {
    removeEntry(id);
    navigation.goBack();
  }

  function edit(id) {
    editOverLimit(id);
    navigation.goBack();
  }

  return (
    <View>
      <Text>{route.params.item.text}</Text>
      <Pressable onPress={() => remove(route.params.item.id)}>
        <Text>Remove</Text>
      </Pressable>
      <Pressable onPress={() => edit(route.params.item.id)}>
        <Text>Check</Text>
      </Pressable>
    </View>
  );
}
