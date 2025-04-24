import React from "react";

import { Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import styles from "./styles";

type Props = {};

const NO_DATA_STRING = {
  WLCM: "Welcome to WeatherApp",
  GET_STARTED_MESSAGE:
    "To get started enter your city name in above input box and press the arrow to fetch the weather data of your city.",
};

const NoDataInformationCard = ({}: Props) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["black", "#343434", "#28282B"]}
    >
      <Text style={styles.title}>{NO_DATA_STRING.WLCM}</Text>
      <Text style={styles.description}>
        {NO_DATA_STRING.GET_STARTED_MESSAGE}
      </Text>
    </LinearGradient>
  );
};

export default NoDataInformationCard;
