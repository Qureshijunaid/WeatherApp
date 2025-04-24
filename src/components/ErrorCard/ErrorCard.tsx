import React from "react";

import { View } from "react-native";
import LottieView from "lottie-react-native";

import styles from "./styles";

type Props = {};

const ErrorCard = ({}: Props) => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={styles.animation}
        source={require("../../assets/lottie/404.json")}
      />
    </View>
  );
};

export default ErrorCard;
