import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimension";

const styles = StyleSheet.create({
    animation: {
      height: vh(200),
      width: vw(200),
    },
    container: {
      alignItems: "center",
      flex: 1,
      justifyContent: "center",
    },
  });


  export default styles;