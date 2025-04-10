import React from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

type Props = {};

const ErrorCard = ({}: Props) => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={styles.animation}
        source={require('../assets/lottie/404.json')}
      />
    </View>
  );
};

export default ErrorCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    height: 400,
    width: 400,
  },
});
