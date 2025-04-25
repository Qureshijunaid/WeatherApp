import React from "react";

// eslint-disable-next-line import/namespace
import { Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "../../context/ThemeContext";
import { lightTheme, darkTheme } from "../../theme/theme";
import styles from "./styles";

type Props = {};

const NO_DATA_STRING = {
  WLCM: "Welcome to WeatherApp",
  GET_STARTED_MESSAGE:
    "To get started enter your city name in above input box and press the arrow to fetch the weather data of your city.",
};

const NoDataInformationCard = ({}: Props) => {
  const { theme } = useTheme();
  const colors = theme === "light" ? lightTheme : darkTheme;
  return (
    <LinearGradient
      style={styles.container}
      colors={colors.gradienBackground}
    >
      <Text style={[styles.title, { color: colors.text }]}>{NO_DATA_STRING.WLCM}</Text>
      <Text style={[styles.description, { color: colors.text }]}>
        {NO_DATA_STRING.GET_STARTED_MESSAGE}
      </Text>
    </LinearGradient>
  );
};

export default NoDataInformationCard;
