import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherState } from './models/weatherState';

const initialState: WeatherState = {
  weather: null,
  isLoading: false,
  error: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<WeatherState>) => {
      state.weather = action.payload.weather;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setWeatherData, setLoading, setError } = weatherSlice.actions;
