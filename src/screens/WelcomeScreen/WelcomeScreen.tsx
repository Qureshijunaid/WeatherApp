import React, { useEffect, useState, useRef } from "react";

import { ScrollView, Alert, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import LinearGradient from "react-native-linear-gradient";

import { useTheme } from "../../context/ThemeContext";
import { lightTheme, darkTheme } from "../../theme/theme";
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
        console.warn(
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
    if (searchQuery.trim() === "") return;
    if (!isConnected) {
      Alert.alert(
        "No internet",
        "Please connect to the internet to fetch weather data."
      );
      return;
    }
    try {
      await dispatch(fetchWeatherData(searchQuery)).unwrap();
    } catch (err: any) {
      console.warn("Error", err || "Unable to fetch weather data.");
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
    }, 1200); // Adjust debounce delay (1200ms) as needed
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
    <LinearGradient
      style={styles.mainContainer}
      colors={colors.gradienBackground}
    >
      <ScrollView style={styles.container}>
        <SafeAreaView testID="home-screen" style={styles.container}>
          <TouchableOpacity
            onPress={toggleTheme}
            style={[styles.button]}
            activeOpacity={1}
          >

            <Image
              source={require("../../assets/icon/darklight.png")}
              style={styles.darklight}
            />
          </TouchableOpacity>
          <SearchBarComponent
            value={city}
            onChange={handleCityChange} // Use debounced handler here
            onSearch={() => handleSearchWeather(city)}
          />
          {renderContent()}
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
};

export default WelcomeScreen;
