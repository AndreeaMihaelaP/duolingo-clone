import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import heart from "../../../assets/images/heart.png";

import ProgressBar from "../ProgressBar";

const Header = ({ progress, lives }) => {
  return (
    <View style={styles.root}>
      <ProgressBar progress={progress} />
      <Image source={heart} style={styles.icon} resizeMethod="contain" />
      <Text style={styles.lives}>{lives}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 25,
    marginHorizontal: 10,
  },
  lives: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Header;
