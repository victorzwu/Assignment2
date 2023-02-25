import { View, Text, Pressable, Alert } from "react-native";
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
      <Pressable
        onPress={() =>
          Alert.alert(
            "Important",
            "Are you sure you want to remove this item?",
            [
              {
                text: "No",
              },
              { text: "Yes", onPress: () => remove(route.params.item.id) },
            ]
          )
        }
      >
        <Text>Remove</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          Alert.alert(
            "Important",
            "Are you sure you want to mark this item as reviewed?",
            [
              {
                text: "No",
              },
              { text: "Yes", onPress: () => edit(route.params.item.id) },
            ]
          )
        }
      >
        <Text>Check</Text>
      </Pressable>
    </View>
  );
}
