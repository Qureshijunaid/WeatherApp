import apiClient from '../api/apiClient';
import constant from '../constant/constant';

export const getWeatherForecast = (city: string) => {
  return apiClient.get(`/forecast.json?q=${city}&days=1&key=${constant.weatherAPIKey}`);
};