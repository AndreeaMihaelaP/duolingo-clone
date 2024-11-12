import React from "react";
import { Pressable, Text } from "react-native";

import styles from "./styles";

const WordOption = ({ text, isSelected, onPress }) => {
  return (
    <Pressable
      style={[
        styles.root,
        { backgroundColor: isSelected ? "lightgray" : "white" },
      ]}
      onPress={onPress}>
      <Text
        style={[styles.text, { color: isSelected ? "lightgray" : "black" }]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default WordOption;
