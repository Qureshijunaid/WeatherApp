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
    <>
      <LinearGradient style={styles.gradient} colors={colors.gradienBackground}>
        <View style={styles.container}>
          <Text style={styles.weatherLogo}>
            {getWeatherIcon(current?.condition?.code)}
          </Text>
          <Text style={[styles.temperature, { color: colors.text }]}>
            {current?.temp_c}°C
          </Text>
          <Text style={[styles.weatherDescription, { color: colors.text }]}>
            It's {current?.condition?.text} today
          </Text>
          <Text style={[styles.date, { color: colors.text }]}>
            {moment.unix(location?.localtime_epoch).format("dddd, DD MMM")}
          </Text>
          <Text style={[styles.cityName, { color: colors.text }]}>
            {location?.name}
            {location?.name !== location?.region && `,${location?.region}`}
          </Text>
        </View>
      </LinearGradient>
      <LinearGradient style={styles.gradient} colors={colors.gradienBackground}>
        <View style={styles.itemcontainer}>
          <View style={styles.box}>
            <Text style={[styles.icon, { color: colors.text }]}>🌡️</Text>
            <View>
              <Text style={[styles.title, { color: colors.text }]}>
                Feels Like
              </Text>
              <Text style={[styles.value, { color: colors.text }]}>
                {current?.feelslike_c}°C
              </Text>
            </View>
          </View>
          <View style={styles.box}>
            <Text style={[styles.icon, { color: colors.text }]}>༄</Text>
            <View>
              <Text style={[styles.title, { color: colors.text }]}>
                Wind Speed
              </Text>
              <Text style={[styles.value, { color: colors.text }]}>
                {current?.wind_kph} Km/h
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.itemcontainer}>
          <View style={styles.box}>
            <Text style={[styles.icon, { color: colors.text }]}>🟡</Text>
            <View>
              <Text style={[styles.title, { color: colors.text }]}>
                UV Index
              </Text>
              <Text style={[styles.value, { color: colors.text }]}>
                {current?.uv}
              </Text>
            </View>
          </View>
          <View style={styles.box}>
            <Text style={[styles.icon, { color: colors.text }]}>💧</Text>
            <View>
              <Text style={[styles.title, { color: colors.text }]}>
                Humidity
              </Text>
              <Text style={[styles.value, { color: colors.text }]}>
                {current?.humidity}%
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.itemcontainer}>
          <View style={styles.box}>
            <Text style={[styles.icon, { color: colors.text }]}>🌤️</Text>
            <View>
              <Text style={[styles.title, { color: colors.text }]}>
                Sunrise
              </Text>
              <Text style={[styles.value, { color: colors.text }]}>
                {astro?.sunrise}
              </Text>
            </View>
          </View>
          <View style={styles.box}>
            <Text style={[styles.icon, { color: colors.text }]}>🌝</Text>
            <View>
              <Text style={[styles.title, { color: colors.text }]}>Sunset</Text>
              <Text style={[styles.value, { color: colors.text }]}>
                {astro?.sunset}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default WeatherCardComponent;
