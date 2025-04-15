import React, { useEffect, useState, useRef } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";

import { fetchWeatherData } from "../../redux/slice/weatherSlice";
import {
  ErrorCard,
  WeatherCardComponent,
  SearchBarComponent,
  NoDataInformationCard,
  LoaderComponent,
} from "../../components";
import { RootState } from "../../redux/store";

const WelcomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const {
    error = false,
    loading = "idle",
    weatherData = {},
  } = useSelector((state: RootState) => state.weather || {});

  const [city, setCity] = useState<string>("");
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  // Fetch weather data for the given city
  const handleSearchWeather = async (searchQuery: string) => {
    if (searchQuery.trim() === "") return; // Avoid unnecessary API calls for empty searches
    try {
      await dispatch(fetchWeatherData(searchQuery));
    } catch (err) {
      // Optional: Add error handling logic (e.g., toast message or log)
    }
  };

  // Debounce input and trigger weather search after typing stops for 500ms
  const handleCityChange = (text: string) => {
    setCity(text);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      handleSearchWeather(text);
    }, 500); // Adjust debounce delay (500ms) as needed
  };

  // Auto-fetch weather data on initial load if location name exists
  useEffect(() => {
    if (weatherData?.location?.name) {
      handleSearchWeather(weatherData.location.name);
    }
  }, []);

  const renderContent = () => {
    if (error && loading === "failed") {
      return <ErrorCard />;
    }

    if (loading === "pending") {
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
          onChange={handleCityChange} // Use debounced handler here
          onSearch={() => handleSearchWeather(city)}
        />
        {renderContent()}
      </SafeAreaView>
    </ScrollView>
  );
};

export default WelcomeScreen;
