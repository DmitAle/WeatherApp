import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocationState } from './models/LocationState';

const initialState: LocationState = {
  lat: null,
  lon: null,
  city: null,
  cityDistrict: null,
  error: null,
  errorLocation: null,
};

export const locationSlice = createSlice({
  name: 'coordinates',
  initialState,
  reducers: {
    setCoordinates: (state, action: PayloadAction<{ lat: number; lon: number }>) => {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
      state.error = null;
    },
    setCoordinatesError: (state, action: PayloadAction<string>) => {
      state.lat = null;
      state.lon = null;
      state.error = action.payload;
    },
    setLocation: (state, action: PayloadAction<{ city: string; cityDistrict: string }>) => {
      state.city = action.payload.city;
      state.cityDistrict = action.payload.cityDistrict;
      state.errorLocation = null;
    },
    setLocationError: (state, action: PayloadAction<string>) => {
      state.city = null;
      state.cityDistrict = null;
      state.errorLocation = action.payload;
    },
  },
});

export const { setCoordinates, setCoordinatesError, setLocation, setLocationError } = locationSlice.actions;
