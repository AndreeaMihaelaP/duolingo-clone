import React from "react";
import { View, Text, Image } from "react-native";
import ImageOption from "./src/components/ImageOption";

import styles from "./App.styles";

const App = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is the "glass"?</Text>
      <View style={styles.optionsContainer}>
        <ImageOption />
      </View>
    </View>
  );
};
export default App;
