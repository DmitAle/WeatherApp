import { FetchWeatherDataQuery } from '@shared/utils/generated-types';
import { ForecastWeather } from '../models/ForecastWeather';
import { i18n } from '@shared/utils/i18n';

export const getForecastWeather = (data: FetchWeatherDataQuery | null): ForecastWeather => {
  if (data) {
    const newData = data.weatherByPoint.forecast.days.map((days) => {
      const weatherDate = new Date(days.time);

      const month = i18n(`${weatherDate.getMonth()}_month`);

      const mothDate = `${weatherDate.getDate()} ${month}`;

      return {
        dayOfWeek: i18n(`${weatherDate.getDay()}_day`),
        date: mothDate,
        icon: days.summary.day.icon,
        maxTemperature: days.summary.day.temperature,
        minTemperature: days.summary.night.temperature,
        condition: i18n(days.summary.day.condition),
      };
    });

    return newData;
  }

  return [];
};
