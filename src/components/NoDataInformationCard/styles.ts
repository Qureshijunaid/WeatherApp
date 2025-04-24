import { StyleSheet } from "react-native";

import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 30,
    gap: 10,
    height: 400,
    justifyContent: "center",
    padding: 10,
    width: "auto",
  },
  description: {
    ...theme.typography.bodyMedium.medium,
  },
  title: {
    ...theme.typography.heading.heading1,
    textTransform: "uppercase",
  },
});

export default styles;
