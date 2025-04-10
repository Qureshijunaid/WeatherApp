import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { fetchWeatherData } from '../redux/slice/weatherSlice';
import {
  ErrorCard,
  WeatherCardComponent,
  SearchBarComponent,
  NoDataInformationCard,
  LoaderComponent,
} from '../components';
import theme from '../theme';
import { RootState } from '../redux/store';

const WelcomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { error = false, loading = 'idle', weatherData = {} } = useSelector(
    (state: RootState) => state.weather || {}
  );

  const [city, setCity] = useState<string>('');

  // Fetch weather data for the given city
  const handleSearchWeather = async (searchQuery: string) => {
    try {
      await dispatch(fetchWeatherData(searchQuery));
      setCity('');
    } catch (err) {
      // Optional: Add error handling logic (e.g., toast message or log)
    }
  };

  // Auto-fetch weather data on initial load if location name exists
  useEffect(() => {
    if (weatherData?.location?.name) {
      handleSearchWeather(weatherData.location.name);
    }
  }, []);

  const renderContent = () => {
    if (error && loading === 'failed') {
      return <ErrorCard />;
    }

    if (loading === 'pending') {
      return <LoaderComponent />;
    }

    if (weatherData && Object.keys(weatherData).length > 0) {
      return <WeatherCardComponent />;
    }

    return <NoDataInformationCard />;
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView testID="home-screen" style={styles.container}>
        <SearchBarComponent
          value={city}
          onChange={(text: string) => setCity(text)}
          onSearch={() => handleSearchWeather(city)}
        />
        {renderContent()}
      </SafeAreaView>
    </ScrollView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
    gap: 15,
    backgroundColor: "#808080",
  },
});
