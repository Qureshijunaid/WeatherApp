import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import moment from "moment";
import theme from "../theme";
import { weatherConditions } from "../constant/weatherConditon";
import { RootState } from "../redux/store";

type Props = {};

const WeatherCardComponent = ({}: Props) => {
  const weather = useSelector((state: RootState) => state.weather);
  const { current, location, forecast } = weather.weatherData || {};
  const { astro } = forecast?.forecastday?.[0] || {};

  // get weather emoji based on the code
  const getWeatherIcon = (code: number) => {
    const condition = weatherConditions.find((item) => item.code === code);
    return condition ? condition.icon : "🌤️"; // Default emoji if code is not found
  };

  return (
    <>
      <LinearGradient
        style={styles.gradient}
        colors={theme.color.gradient.darkBackground}
      >
        <View style={styles.container}>
          <Text style={styles.weatherLogo}>
            {getWeatherIcon(current?.condition?.code)}
          </Text>
          <Text style={styles.temperature}>{current?.temp_c}°C</Text>
          <Text style={styles.weatherDescription}>
            It's {current?.condition?.text} today
          </Text>
          <Text style={styles.date}>
            {moment.unix(location?.localtime_epoch).format("dddd, DD MMM")}
          </Text>
          <Text style={styles.cityName}>
            {location?.name}
            {location?.name !== location?.region && `,${location?.region}`}
          </Text>
        </View>
      </LinearGradient>
      <LinearGradient
        style={styles.gradient}
        colors={theme.color.gradient.darkBackground}
      >
        <View style={styles.itemcontainer}>
          <View style={styles.box}>
            <Text style={styles.icon}>🌡️</Text>
            <View>
              <Text style={styles.title}>Feels Like</Text>
              <Text style={styles.value}>{current?.feelslike_c}°C</Text>
            </View>
          </View>
          <View style={styles.box}>
            <Text style={styles.icon}>༄</Text>
            <View>
              <Text style={styles.title}>Wind Speed</Text>
              <Text style={styles.value}>{current?.wind_kph} Km/h</Text>
            </View>
          </View>
        </View>
        <View style={styles.itemcontainer}>
          <View style={styles.box}>
            <Text style={styles.icon}>🟡</Text>
            <View>
              <Text style={styles.title}>UV Index</Text>
              <Text style={styles.value}>{current?.uv}</Text>
            </View>
          </View>
          <View style={styles.box}>
            <Text style={styles.icon}>💧</Text>
            <View>
              <Text style={styles.title}>Humidity</Text>
              <Text style={styles.value}>{current?.humidity}%</Text>
            </View>
          </View>
        </View>
        <View style={styles.itemcontainer}>
          <View style={styles.box}>
            <Text style={styles.icon}>🌤️</Text>
            <View>
              <Text style={styles.title}>Sunrise</Text>
              <Text style={styles.value}>{astro?.sunrise}</Text>
            </View>
          </View>
          <View style={styles.box}>
            <Text style={styles.icon}>🌝</Text>
            <View>
              <Text style={styles.title}>Sunset</Text>
              <Text style={styles.value}>{astro?.sunset}</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default WeatherCardComponent;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
  },
  gradient: {
    borderRadius: 30,
    marginTop: 50,
  },
  cityName: {
    ...theme.typography.bodyMedium.light,
    textTransform: "uppercase",
    letterSpacing: 3,
    textAlign: "center",
  },
  date: {
    ...theme.typography.bodyMedium.medium,
    textAlign: "center",
  },
  temperature: {
    ...theme.typography.heading.heading2,
    fontSize: 62,
    textTransform: "uppercase",
    letterSpacing: 3,
    textAlign: "center",
  },
  weatherDescription: {
    ...theme.typography.subHeading.subHeading2,
    textTransform: "uppercase",
    letterSpacing: 3,
    textAlign: "center",
  },
  weatherLogo: {
    fontSize: 100,
    fontWeight: "100",
    color: theme.color.primary.white,
    textTransform: "uppercase",
    letterSpacing: 3,
    textAlign: "center",
  },
  icon: {
    fontSize: 40,
    fontWeight: "100",
    color: theme.color.primary.white,
    textTransform: "uppercase",
    letterSpacing: 3,
  },
  title: {
    ...theme.typography.bodySmall.regular,
  },
  value: {
    ...theme.typography.bodyMedium.regular,
  },
  itemcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  box: { flexDirection: "row", alignItems: "center", gap: 10 },
});
