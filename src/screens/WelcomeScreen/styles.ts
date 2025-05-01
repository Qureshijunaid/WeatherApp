import { StyleSheet } from "react-native";

import { vh, vw } from "../../utils/dimension";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: vw(16),
    fontWeight: "500",
    textAlign: "center",
  },
  container: {
    flex: 1,
    gap: 30,
    padding: 7,
    paddingBottom: vh(35),
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: vh(32),
  },
  darklight: {
    height: vh(40),
    resizeMode: "contain",
    width: vw(40),
  },
});

export default styles;
