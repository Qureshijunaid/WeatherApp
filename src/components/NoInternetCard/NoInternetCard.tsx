import React from "react";

import { View, Text } from "react-native";

import styles from "./styles";

const NoInternetCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        No internet connection. Please check your network.
      </Text>
    </View>
  );
};

export default NoInternetCard;
