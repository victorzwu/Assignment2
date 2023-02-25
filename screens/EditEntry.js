import { View, Text, Pressable, Alert, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

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
    <View style={{ alignItems: "center" }}>
      <View style={styles.container}>
        <Text style={styles.text}>Calories: {route.params.item.calories}</Text>
        <Text style={styles.text}>Description: {route.params.item.text}</Text>
        <View style={styles.pressableContainer}>
          <Pressable
            style={styles.pressable}
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
            <FontAwesome5 name="trash" size={24} color="white" />
          </Pressable>

          {route.params.item.overLimit && (
            <Pressable
              style={styles.pressable}
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
              <Entypo name="check" size={24} color="white" />
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "slateblue",
    backgroundColor: "slateblue",
    borderRadius: 5,
    borderWidth: 2,
    width: 300,
    margin: 10,
    padding: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "darkslateblue",
    fontWeight: "bold",
    fontSize: 20,
    padding: 5,
  },
  pressableContainer: {
    flexDirection: "row",
    padding: 10,
  },
  pressable: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "darkslateblue",
  },
});
