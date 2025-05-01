import React from "react";

import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import moment from "moment";

import { useTheme } from "../../context/ThemeContext";
import { lightTheme, darkTheme } from "../../theme/theme";
import { weatherConditions } from "../../constant/weatherConditon";
import { RootState } from "../../redux/store";
import styles from "./styles";

type Props = {};

const WeatherCardComponent = ({}: Props) => {
  const weather = useSelector((state: RootState) => state.weather);

  const { theme } = useTheme();
  const colors = theme === "light" ? lightTheme : darkTheme;

  const { current, location, forecast } = weather.weatherData || {};
  const { astro } = forecast?.forecastday?.[0] || {};

  // get weather emoji based on the code
  const getWeatherIcon = (code: number) => {
    const condition = weatherConditions.find((item) => item.code === code);
    return condition ? condition.icon : "🌤️"; // Default emoji if code is not found
  };

  return (
    <View style={styles.gradient}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.locationContainer}>
          <Text style={[styles.cityName, { color: colors.text }]}>
            {location?.name}
          </Text>
          <Text style={[styles.countryName, { color: colors.text }]}>
            {location?.country}
          </Text>
          <Text style={[styles.temperature, { color: colors.text }]}>
            {current?.temp_c}°C
          </Text>
        </View>
        <View
          style={styles.weatherContainer}
        >
          <Text style={styles.weatherLogo}>
            {getWeatherIcon(current?.condition?.code)}
          </Text>
          <Text style={[styles.weatherDescription, { color: colors.text }]}>
            {current?.condition?.text}
          </Text>
        </View>
      </View>
      <View
        style={[styles.windContainer, { backgroundColor: colors.background }]}
      >
        <Text style={[styles.windText, { color: colors.text }]}>༄ Wind</Text>
        <View style={styles.windSubContainer}>
          <Text style={[styles.title, { color: colors.text }]}>Wind</Text>
          <Text style={[styles.value, { color: colors.text }]}>
            {current?.wind_kph} Km/h
          </Text>
        </View>
        <View style={styles.windSubContainer}>
          <Text style={[styles.title, { color: colors.text }]}>Pressure</Text>
          <Text style={[styles.value, { color: colors.text }]}>
            {current?.pressure_mb} hpa
          </Text>
        </View>
      </View>

      <View
        style={[styles.windContainer, { backgroundColor: colors.background }]}
      >
        <Text style={[styles.windText, { color: colors.text }]}>
          🌡️ Feels Like
        </Text>
        <View style={styles.windSubContainer}>
          <Text style={[styles.title, { color: colors.text }]}>Feels Like</Text>
          <Text style={[styles.value, { color: colors.text }]}>
            {current?.feelslike_c}°C
          </Text>
        </View>
        <View style={styles.windSubContainer}>
          <Text style={[styles.title, { color: colors.text }]}>Humidity</Text>
          <Text style={[styles.value, { color: colors.text }]}>
            {current?.humidity} %
          </Text>
        </View>
      </View>

      <View
        style={[styles.windContainer, { backgroundColor: colors.background }]}
      >
        <Text style={[styles.windText, { color: colors.text }]}>
          🌤️ Twilight
        </Text>
        <View style={styles.windSubContainer}>
          <Text style={[styles.title, { color: colors.text }]}>Sunrise</Text>
          <Text style={[styles.value, { color: colors.text }]}>
            {astro?.sunrise}
          </Text>
        </View>
        <View style={styles.windSubContainer}>
          <Text style={[styles.title, { color: colors.text }]}>Sunset</Text>
          <Text style={[styles.value, { color: colors.text }]}>
            {astro?.sunset}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherCardComponent;
