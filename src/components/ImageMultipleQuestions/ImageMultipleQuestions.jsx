import React, { useState } from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import ImageOption from "../ImageOption";
import Button from "../Button";

import styles from "./styles";
import propTypes from "prop-types";

const ImageMultipleQuestions = ({ question, onCorrect, onWrong }) => {
  const [selected, setSelected] = useState(null);

  const onButtonPress = () => {
    if (selected.correct) {
      onCorrect();
      setSelected(null);
    } else {
      onWrong();
    }
  };
  return (
    <>
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map((item) => (
          <ImageOption
            key={item.id}
            image={item.image}
            text={item.text}
            isSelected={selected?.id === item.id}
            onPress={() => setSelected(item)}
          />
        ))}
      </View>
      <Button text="Check" onPress={onButtonPress} disabled={!selected} />
    </>
  );
};

ImageMultipleQuestions.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        image: PropTypes.string,
        correct: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,
  onCorrect: PropTypes.func,
  onWrong: PropTypes.func,
};

export default ImageMultipleQuestions;
