import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderWidth: 1,
      borderRadius: 30,
      padding: 5,
      borderColor: theme.color.primary.white,
      backgroundColor: theme.color.primary.black,
    },
    input: {
      paddingHorizontal: 10,
      ...theme.typography.placeholderLables,
    },
    button: {
      backgroundColor: theme.color.primary.white,
      width: 42,
      height: 42,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 60,
    },
    icon: {
      height: 24,
      width: 24,
    },
  });

  export default styles;