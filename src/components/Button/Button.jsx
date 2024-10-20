import React from "react";
import { Pressable, View, Text } from "react-native";

import styles from "./styles";
import PropTypes from "prop-types";

const Button = ({ text, onPress, disabled }) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, disabled ? styles.disabledContainer : {}]}>
      <View style={styles.wrapperText}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onPress: () => {},
  disabled: false,
};

export default Button;
