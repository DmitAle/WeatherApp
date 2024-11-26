import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Epic, ofType, StateObservable } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { RootState } from '@app/store';
import { setLocation, setLocationError } from '..';

export const fetchLocationAction = createAction<{
  lat: number;
  lon: number;
}>('fetchLocation');

export const fetcLocationEpic: Epic<PayloadAction<{ lat: number; lon: number }>, any, RootState> = (action$) =>
  action$.pipe(
    ofType(fetchLocationAction.type),
    mergeMap((action) => {
      const { lat, lon } = action.payload;
      return ajax.getJSON<any>(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`).pipe(
        map((response) => {
          const locationData = {
            city: response?.address?.city || response?.address?.town || 'Неизвестный город',
            cityDistrict: response?.address?.city_district || 'Неизвестный район',
          };

          return setLocation({
            city: locationData.city,
            cityDistrict: locationData.cityDistrict,
          });
        }),
        catchError((error) => {
          return of(setLocationError('Не удалось загрузить данные о локации.'));
        }),
      );
    }),
  );
