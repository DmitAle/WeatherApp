import { weatherSlice } from '@features/getWeather/WeatherSlice';
import { locationSlice } from '@features/getLocation/LoactionSlice';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  weather: weatherSlice.reducer,
  location: locationSlice.reducer,
});
