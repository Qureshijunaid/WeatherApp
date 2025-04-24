import React, { useEffect, useState, useRef } from "react";
import { ScrollView, Alert, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../../context/ThemeContext";
import { lightTheme, darkTheme } from "../../theme/theme";
import NetInfo from "@react-native-community/netinfo";
import styles from "./styles";

import { fetchWeatherData } from "../../redux/slice/weatherSlice";
import {
  ErrorCard,
  WeatherCardComponent,
  SearchBarComponent,
  NoDataInformationCard,
  LoaderComponent,
  NoInternetCard,
} from "../../components";
import { RootState } from "../../redux/store";

const WelcomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const {
    error = false,
    loading = "idle",
    weatherData = {},
  } = useSelector((state: RootState) => state.weather || {});

  const { theme, toggleTheme } = useTheme();
  const colors = theme === "light" ? lightTheme : darkTheme;

  const [city, setCity] = useState<string>("");
  const [isConnected, setIsConnected] = useState<boolean>(true); // State to track internet connection
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  // Check for internet connection
  const checkInternetConnection = () => {
    NetInfo.fetch().then((state) => {
      setIsConnected(state.isConnected); // Update state based on connection
      if (!state.isConnected) {
        Alert.alert(
          "No internet connection",
          "Please check your network connection."
        );
      }
    });
  };

  useEffect(() => {
    checkInternetConnection();

    // Add event listener to listen for connection change
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe(); // Cleanup the listener on component unmount
    };
  }, []);

  // Fetch weather data for the given city
  const handleSearchWeather = async (searchQuery: string) => {
    if (searchQuery.trim() === "") return; // Avoid unnecessary API calls for empty searches

    // Only fetch weather data if the user is connected to the internet
    if (!isConnected) {
      Alert.alert(
        "No internet",
        "Please connect to the internet to fetch weather data."
      );
      return;
    }

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
    if (!isConnected) {
      return <NoInternetCard />; // Show NoInternetCard if not connected
    }

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
        <Text style={[styles.title, { color: colors.text }]}>
          Welcome to WeatherApp
        </Text>
        <TouchableOpacity
          onPress={toggleTheme}
          style={[styles.button, { backgroundColor: colors.buttonBackground }]}
          activeOpacity={1}
        >
          <Text style={[styles.buttonText, { color: colors.buttonText }]}>
            Switch to {theme === "light" ? "Dark" : "Light"} Theme
          </Text>
        </TouchableOpacity>
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
