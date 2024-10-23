import React from "react";
import { View, StyleSheet } from "react-native";

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.background}>
      <View style={[styles.foreground, { width: `${progress * 100}%` }]}>
        <View style={styles.highlight} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "lightgrey",
    height: 20,
    borderRadius: 15,
    flex: 1,
  },
  foreground: {
    flex: 1,
    backgroundColor: "#FAC800",
    borderRadius: 15,
    width: "15%",
  },
  highlight: {
    backgroundColor: "#FAC800",
    width: "90%",
    height: 5,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: "center",
  },
});

export default ProgressBar;
