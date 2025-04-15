import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import moment from "moment";
import theme from "../../theme";
import { weatherConditions } from "../../constant/weatherConditon";
import { RootState } from "../../redux/store";
import styles from "./styles";

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
