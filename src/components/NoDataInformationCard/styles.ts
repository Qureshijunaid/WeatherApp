import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 10,
    borderRadius: 30,
  },
  title: {
    ...theme.typography.heading.heading1,
    textTransform: "uppercase",
  },
  description: {
    ...theme.typography.bodyMedium.medium,
  },
});

export default styles;
