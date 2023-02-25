import { View, Text, FlatList } from "react-native";
import React from "react";
import Entry from "./Entry";

export default function EntriesList() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      text: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      text: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      text: "Third Item",
    },
  ];

  return(
    <FlatList
      data={DATA}
      renderItem={({ item }) => {
        return (
          <Entry
            item={item}
          />
        );
      }}
    />
  );
}
