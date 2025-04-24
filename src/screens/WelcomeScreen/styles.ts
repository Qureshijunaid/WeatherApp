import { StyleSheet } from "react-native";

import { vh, vw } from "../../utils/dimension";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    alignSelf: "flex-end",
    borderRadius: vw(8),
    justifyContent: "center",
    paddingHorizontal: vw(24),
    paddingVertical: vh(12),
    width: "50%",
  },
  buttonText: {
    fontSize: vw(16),
    fontWeight: "500",
    textAlign: "center",
  },
  container: {
    backgroundColor: "#808080",
    flex: 1,
    gap: 15,
    padding: 7,
    paddingBottom: vh(35),
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: vh(32),
  },
});

export default styles;
