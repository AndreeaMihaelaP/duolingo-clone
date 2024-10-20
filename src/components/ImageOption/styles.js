import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  optionContainer: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgrey",
    borderRadius: 10,
    alignItems: "center",
    width: "48%",
    height: "48%",

    padding: 10,
  },
  selectedContainer: {
    backgroundColor: "#DDF4FE",
    borderColor: "#81D5FE",
  },

  optionImage: {
    width: "100%",
    flex: 1,
  },
  optionText: {
    fontWeight: "bold",
  },
  selectedText: {
    fontWeight: "bold",
    color: "#40BEF7",
  },
});

export default styles;
