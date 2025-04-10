import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import WeatherCardComponent from '../WeatherCardComponent';

const mockStore = configureStore([]);

describe('WeatherCardComponent', () => {
  it('should render correctly with provided weather data', () => {
    const store = mockStore({
      weather: {
        weatherData: {
          current: {
            temp_c: 25,
            condition: {
              text: 'Sunny',
              code: 1000,
            },
          },
          location: {
            name: 'New York',
            region: 'NY',
            localtime_epoch: 1638288000,
          },
          forecast: {
            forecastday: [
              {
                astro: {
                  sunrise: '06:30 AM',
                  sunset: '07:45 PM',
                },
              },
            ],
          },
        },
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <WeatherCardComponent />
      </Provider>
    );

    expect(getByText('25°C')).toBeTruthy();
    expect(getByText("It's Sunny today")).toBeTruthy();
    expect(getByText('New York,NY')).toBeTruthy();
  });
});
