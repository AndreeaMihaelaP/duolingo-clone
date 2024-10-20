import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";

import ImageMultipleQuestions from "./src/components/ImageMultipleQuestions";

import questions from "./assets/data/imageMulatipleChoiceQuestions";

import styles from "./App.styles";

const App = () => {
  const [selected, setSelected] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You won");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onWrong = () => {
    Alert.alert("Wrong!!!!");
  };

  return (
    <View style={styles.root}>
      <ImageMultipleQuestions
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
    </View>
  );
};
export default App;
