import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",

    margin: 10,
    marginBottom: 0,
  },
  mascot: {
    width: "30%",
    aspectRatio: 3 / 4,
    marginRight: 10,
  },
  sentenceContainer: {
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
  },
  sentence: {
    fontSize: 16,
  },
  textInput: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#ebebeb",

    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,

    padding: 10,
    fontSize: 16,
  },
});

export default styles;
