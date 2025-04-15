import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

import styles from './styles';

type Props = {};

const LoaderComponent = ({}: Props) => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={styles.animation}
        source={require("../../assets/lottie/loading.json")}
      />
    </View>
  );
};

export default LoaderComponent;


