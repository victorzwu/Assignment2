import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Entry from "./Entry";

export default function EntriesList({ removeEntry, entries }) {
  return (
    <View style = {styles.container}>
      <FlatList
        data={entries}
        renderItem={({ item }) => {
          return <Entry item={item} removeEntry={removeEntry} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});
