export type ForecastWeather = Array<{
  dayOfWeek: string;
  date: string;
  icon: string;
  maxTemperature: number;
  minTemperature: number;
  condition: string;
}>;
