import React, { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import PropTypes from "prop-types";

import Button from "../Button";

import mascot from "../../../assets/images/mascot.png";

import styles from "./styles";

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState("");

  const onButtonPress = () => {
    console.log(input);
    if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrect();
    } else {
      onWrong();
    }
    setInput("");
  };

  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image style={styles.mascot} source={mascot} resizeMode="contain" />

        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Type in English"
        style={styles.textInput}
        textAlignVertical="top"
        multiline
      />
      <Button text="Check" onPress={onButtonPress} disabled={!input} />
    </>
  );
};

OpenEndedQuestion.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        text: PropTypes.string,
        answer: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  onCorrect: PropTypes.func,
  onWrong: PropTypes.func,
};

export default OpenEndedQuestion;
