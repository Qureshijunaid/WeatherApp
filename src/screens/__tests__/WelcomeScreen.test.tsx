import React from "react";
import { render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";

const mockStore = configureStore([]);
const initialState = {
  weather: {
    error: false,
    loading: false,
    weatherData: null,
  },
};

describe("WelcomeScreen", () => {
  it("renders correctly", () => {
    const store = mockStore(initialState);

    const { getByTestId } = render(
      <Provider store={store}>
        <WelcomeScreen />
      </Provider>
    );

    expect(getByTestId("home-screen")).toBeTruthy(); // Add testID in WelcomeScreen's main `View`
  });
});
