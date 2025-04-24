import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimension";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
    gap: 15,
    backgroundColor: "#808080",
    paddingBottom: vh(35),
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: vh(32),
  },
  button: {
    paddingHorizontal: vw(24),
    paddingVertical: vh(12),
    borderRadius: vw(8),
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  buttonText: {
    fontSize: vw(16),
    fontWeight: "500",
    textAlign: "center",
  },
});

export default styles;
