import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";

import ImageMultipleQuestions from "./src/components/ImageMultipleQuestions";
import OpenEndedQuestion from "./src/components/OpenEndedQuestions/OpenEndedQuestions";

// import questions from "./assets/data/imageMulatipleChoiceQuestions";
import questions from "./assets/data/allQuestions";

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

  console.log("currentQuestion", currentQuestion);

  return (
    <View style={styles.root}>
      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMultipleQuestions
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      {currentQuestion.type === "OPEN_ENDED" ? (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      ) : null}
    </View>
  );
};
export default App;
