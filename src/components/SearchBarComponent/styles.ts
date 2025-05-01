// eslint-disable-next-line import/namespace
import { StyleSheet } from "react-native";

import theme from "../../theme";

const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: theme.color.primary.white,
      borderRadius: 60,
      height: 42,
      justifyContent: "center",
      width: 42,
    },
    container: {
      alignItems: "center",
      backgroundColor: theme.color.primary.black,
      borderColor: theme.color.primary.white,
      borderRadius: 30,
      borderWidth: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 5,
    },
    icon: {
      height: 24,
      width: 24,
    },
    input: {
      paddingHorizontal: 10,
      ...theme.typography.placeholderLables,
    },
  });

  export default styles;