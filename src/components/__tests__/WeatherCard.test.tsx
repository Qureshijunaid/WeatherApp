import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherCardComponent from '../WeatherCardComponent/WeatherCardComponent';
import { ThemeProvider } from '../../context/ThemeContext';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../../redux/slice/weatherSlice';

describe('WeatherCardComponent', () => {
  it('should render correctly with provided weather data', () => {
    const customStore = configureStore({
      reducer: {
        weather: weatherReducer,
      },
      preloadedState: {
        weather: {
          loading: 'succeeded',
          error: false,
          weatherData: {
            location: {
              name: 'New York',
              country: 'USA',
            },
            current: {
              temp_c: 22,
              condition: {
                text: 'Sunny',
                icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
              },
            },
          },
        },
      },
    });

    const { getByText } = render(
      <Provider store={customStore}>
        <ThemeProvider>
          <WeatherCardComponent />
        </ThemeProvider>
      </Provider>
    );

    expect(getByText('New York')).toBeTruthy();
    expect(getByText('Sunny')).toBeTruthy();
    expect(getByText('22°C')).toBeTruthy();
  });
});