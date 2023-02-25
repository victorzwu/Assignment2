import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';


export default function Entry({ removeEntry, item }) {
    const navigation = useNavigation();

    function onEntryPress(item)
    {
        navigation.navigate('Edit', {item: item})
    }

  return (
    <Pressable style = {styles.pressable} onPress = {()=>onEntryPress(item)}>
      <Text style = {styles.description}>{item.text}</Text>
      <View style = {{justifyContent: 'flex-end', flexDirection: 'row'}}>
      {item.overLimit && <Ionicons style = {{paddingRight: 5}} name="ios-warning" size={24} color="yellow" />}
      <View style = {styles.calories}><Text style = {styles.caloriesText}>{item.calories}</Text></View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    borderColor: "darkslateblue",
    backgroundColor: "darkslateblue",
    borderRadius: 5,
    borderWidth: 2,
    width: 300,
    margin: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  description: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold'
  },

  calories: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 30,
    paddingVertical: 5
  },
  caloriesText:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'darkslateblue'
  }
});
