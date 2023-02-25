import { View, Text, FlatList } from "react-native";
import React from "react";
import Entry from "./Entry";

export default function EntriesList({entries}) {
  return (
    <FlatList
      data={entries}
      renderItem={({ item }) => {
        return <Entry item={item} />;
      }}
    />
  );
}
