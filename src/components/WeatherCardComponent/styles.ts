import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
  },
  gradient: {
    borderRadius: 30,
    marginTop: 50,
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
    fontSize: 62,
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
    fontSize: 100,
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
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  box: { flexDirection: "row", alignItems: "center", gap: 10 },
});

export default styles;
