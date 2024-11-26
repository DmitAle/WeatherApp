import { FetchWeatherDataQuery } from '@shared/utils/generated-types';

export interface WeatherState {
  weather: FetchWeatherDataQuery | null;
  isLoading: boolean;
  error: string | null;
}
