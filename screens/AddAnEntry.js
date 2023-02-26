import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { isEmpty } from "@firebase/util";
import { primaryColor, secondaryColor, tertiarycolor } from "../colorHelper";


export default function AddAnEntry({ addEntry }) {
  const navigation = useNavigation();

  const [validCalories, setValidCalories] = useState(false);
  const [validText, setValidText] = useState(false);
  const [calories, setCalories] = useState("");
  const [text, setText] = useState("");

  function changedCalories(change) {
    setCalories(change);
    !isEmpty(calories) && !isNaN(calories) && parseInt(calories) > 0
      ? setValidCalories(true)
      : setValidCalories(false);
  }

  function changedText(change) {
    setText(change);
    text !== "" ? setValidText(true) : setValidText(false);
  }

  function resetText() {
    setCalories("");
    setText("");
  }

  function submit(calories, text) {
    if (validCalories && validText) {
      addEntry(calories, text);
      resetText();
      navigation.goBack();
    } else {
      Alert.alert("Invalid input", "Please check your input values");
    }
  }

  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Calories         </Text>
          <View style={styles.caloriesInput}>
            <TextInput
              style={styles.textInput}
              value={calories}
              onChangeText={(change) => {
                changedCalories(change);
              }}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Description  </Text>
          <View style={styles.descriptionInput}>
            <TextInput
              style={styles.textInput}
              value={text}
              onChangeText={(change) => {
                changedText(change);
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Pressable
            android_ripple={{ color: tertiaryColor, foreground: "true" }}
            style={({ pressed }) => {
              return [
                styles.pressableUnpressed,
                pressed ? styles.pressablePressed : null,
              ];
            }}
            onPress={() => resetText()}
          >
            <Text style={{ color: "white" }}>Reset</Text>
          </Pressable>
          <Pressable
            android_ripple={{ color: tertiaryColor, foreground: "true" }}
            style={({ pressed }) => {
              return [
                styles.pressableUnpressed,
                pressed ? styles.pressablePressed : null,
              ];
            }}
            onPress={() => submit(calories, text)}
          >
            <Text style={{ color: "white" }}>Submit</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    marginVertical: 50,
    padding: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    margin: 5,
  },
  caloriesInput: {
    borderRadius: 5,
    width: 200,
    height: 40,
    backgroundColor: tertiaryColor,
    padding: 10,
  },
  descriptionInput: {
    borderRadius: 5,
    backgroundColor: tertiaryColor,
    padding: 10,
    width: 200,
    height: 100,
  },
  text: {
    color: primaryColor,
    fontSize: 15,
    fontWeight: "bold",
  },
  textInput: {
    color: "white",
    fontSize: 13,
  },
  pressableUnpressed: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    backgroundColor: primaryColor,
  },
  pressablePressed: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    backgroundColor: tertiaryColor,
  },
});
