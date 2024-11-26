import { weatherData } from '@entities/weatherData/WeatherData';
import { FullWeather } from '../models/FullWeather';
import { i18n } from '@shared/utils/i18n';

export const getFormatedData = (data: weatherData): FullWeather => {
  return {
    temperature: data.weather?.weatherByPoint.now.temperature ?? undefined,
    condition: i18n(data.weather?.weatherByPoint.now.condition) ?? undefined,
    feelsLike: data.weather?.weatherByPoint.now.feelsLike ?? undefined,
    windSpeed: data.weather?.weatherByPoint.now.windSpeed ?? undefined,
    windDirection: i18n(data.weather?.weatherByPoint.now.windDirection) ?? undefined,
    icon: data.weather?.weatherByPoint.now.icon ?? undefined,
  };
};
