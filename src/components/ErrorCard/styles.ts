import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimension";

const styles = StyleSheet.create({
  animation: {
    backgroundColor: "transparent",
    height: vh(400),
    width: vw(400),
  },
  container: {
    height: vh(400),
    width: vw(400),
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
});
export default styles;
