import { StyleSheet } from "react-native";

import theme from "../../theme";
import { vh, vw } from "../../utils/dimension";

const styles = StyleSheet.create({
  box: { alignItems: "center", flexDirection: "row", gap: 10 },
  cityName: {
    ...theme.typography.bodyMedium.light,
    letterSpacing: 3,
    textAlign: "center",
    textTransform: "uppercase",
  },
  container: {
    gap: 10,
    padding: vh(20),
  },
  date: {
    ...theme.typography.bodyMedium.medium,
    textAlign: "center",
  },
  gradient: {
    borderRadius: vw(30),
    marginTop: vh(50),
  },
  icon: {
    color: theme.color.primary.white,
    fontSize: 40,
    fontWeight: "100",
    letterSpacing: 3,
    textTransform: "uppercase",
  },
  itemcontainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    paddingHorizontal: vw(20),
    paddingTop: 10,
  },
  temperature: {
    ...theme.typography.heading.heading2,
    fontSize: vw(62),
    letterSpacing: 3,
    textAlign: "center",
    textTransform: "uppercase",
  },
  title: {
    ...theme.typography.bodySmall.regular,
  },
  value: {
    ...theme.typography.bodyMedium.regular,
  },
  weatherDescription: {
    ...theme.typography.subHeading.subHeading2,
    letterSpacing: 3,
    textAlign: "center",
    textTransform: "uppercase",
  },
  weatherLogo: {
    color: theme.color.primary.white,
    fontSize: vw(100),
    fontWeight: "100",
    letterSpacing: 3,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default styles;
