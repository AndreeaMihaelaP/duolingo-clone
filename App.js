import React from "react";
import { View, Text } from "react-native";

const App = () => {
  const name = "A";
  const time = 7;

  const getName = () => {
    return name;
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        Hello World, {time < 12 ? "Good morning!" : "Good afternoon!"}!
      </Text>
    </View>
  );
};
export default App;
