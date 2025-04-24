import { StyleSheet } from "react-native";
import theme from "../../theme";
import { vh, vw } from "../../utils/dimension";

const styles = StyleSheet.create({
  container: {
    padding: vh(20),
    gap: 10,
  },
  gradient: {
    borderRadius: vw(30),
    marginTop: vh(50),
  },
  cityName: {
    ...theme.typography.bodyMedium.light,
    textTransform: "uppercase",
    letterSpacing: 3,
    textAlign: "center",
  },
  date: {
    ...theme.typography.bodyMedium.medium,
    textAlign: "center",
  },
  temperature: {
    ...theme.typography.heading.heading2,
    fontSize: vw(62),
    textTransform: "uppercase",
    letterSpacing: 3,
    textAlign: "center",
  },
  weatherDescription: {
    ...theme.typography.subHeading.subHeading2,
    textTransform: "uppercase",
    letterSpacing: 3,
    textAlign: "center",
  },
  weatherLogo: {
    fontSize: vw(100),
    fontWeight: "100",
    color: theme.color.primary.white,
    textTransform: "uppercase",
    letterSpacing: 3,
    textAlign: "center",
  },
  icon: {
    fontSize: 40,
    fontWeight: "100",
    color: theme.color.primary.white,
    textTransform: "uppercase",
    letterSpacing: 3,
  },
  title: {
    ...theme.typography.bodySmall.regular,
  },
  value: {
    ...theme.typography.bodyMedium.regular,
  },
  itemcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: vw(20),
    paddingTop: 10,
    paddingBottom: 10,
  },
  box: { flexDirection: "row", alignItems: "center", gap: 10 },
});

export default styles;
