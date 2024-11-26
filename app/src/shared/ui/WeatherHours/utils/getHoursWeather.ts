import { FetchWeatherDataQuery } from '@shared/utils/generated-types';
import { i18n } from '@shared/utils/i18n';
import { HourlyWeather } from '../models/HourseWeather';

export const getHourseWeather = (data: FetchWeatherDataQuery | null): HourlyWeather => {
  let currDay = new Date();
  if (data) {
    const newData = data.weatherByPoint.forecast.hours.edges.map((hours) => {
      const weatherDate = new Date(parseInt(hours.node.timestamp) * 1000);

      const formattedHours = weatherDate.getHours() < 10 ? `0${weatherDate.getHours()}` : `${weatherDate.getHours()}`;
      if (currDay.getDay() == weatherDate.getDay()) {
        return {
          time: `${formattedHours}:00`,
          temperature: hours.node.temperature,
          icon: hours.node.icon,
        };
      }

      currDay = new Date(weatherDate);
      const day = i18n(`${weatherDate.getDay()}_day`);

      return {
        time: `${day}, ${formattedHours}:00`,
        temperature: hours.node.temperature,
        icon: hours.node.icon,
      };
    });

    return newData;
  }

  return [];
};
