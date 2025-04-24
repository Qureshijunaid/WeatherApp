import React from "react";

import { StatusBar, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from './src/context/ThemeContext';
import StackNavigation from "./src/navigation/StackNavigation";
import { persistor, store } from "./src/redux/store";

const App = () => {
  return (
    <ThemeProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <StatusBar />
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </View>
      </PersistGate>
    </Provider>
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
  },
});
