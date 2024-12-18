import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#58CC02",
    height: 50,
    marginVertical: 10,

    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 5,
    borderBottomWidth: 5,
    borderColor: "#57A600",
  },
  disabledContainer: {
    backgroundColor: "lightgrey",
    borderColor: "grey",
  },
  wrapperText: {
    borderColor: "white",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default styles;
