import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

type Props = {};

const LoaderComponent = ({}: Props) => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={styles.animation}
        source={require('../assets/lottie/loading.json')}
      />
    </View>
  );
};

export default LoaderComponent;

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
