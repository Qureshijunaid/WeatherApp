import { StyleSheet } from "react-native";

import theme from "../../theme";
import { vh, vw } from "../../utils/dimension";

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box: { alignItems: "center", flexDirection: "row", gap: 10 },
  cityName: {
    ...theme.typography.bodyMedium.medium,
    fontSize: vw(20),
    letterSpacing: 3,
    textTransform: "uppercase",
  },
  countryName: {
    ...theme.typography.bodyMedium.light,
    marginTop: vh(5),
    letterSpacing: 3,
    textTransform: "uppercase",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: vw(20),
    padding: vw(15),
  },
  windContainer: {
    borderRadius: vw(20),
    padding: vw(15),
    marginTop: vh(20),
  },
  date: {
    ...theme.typography.bodyMedium.medium,
    textAlign: "center",
  },
  gradient: {
    borderRadius: vw(30),
    flex: 1,
    justifyContent: "center",
  },
  icon: {
    color: theme.color.primary.white,
    fontSize: 20,
    fontWeight: "medium",
    letterSpacing: 3,
  },
  windText: {
    fontSize: vh(20),
    fontWeight: "500",
    letterSpacing: 3,
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
    letterSpacing: 3,
    textTransform: "uppercase",
  },
  title: {
    ...theme.typography.bodySmall.medium,
  },
  value: {
    ...theme.typography.bodyMedium.regular,
  },
  weatherDescription: {
    ...theme.typography.subHeading.subHeading2,
    marginBottom: vh(20),
    textAlign: "center",
    textTransform: "uppercase",
  },
  weatherLogo: {
    fontSize: vw(50),
    textAlign: "center",
  },
  windSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: vh(10),
  },
  locationContainer: { alignItems: "center", justifyContent: "center" },
  weatherContainer: {
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
