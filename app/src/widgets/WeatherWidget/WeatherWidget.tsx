import { useEffect } from 'react';
import { WeatherCard } from '@shared/ui/WeatherCard';
import { useFetchWeatherDataQuery } from '@shared/utils/generated-types';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { setLoading, setError, setWeatherData } from '@features/getWeather';
import { Typography } from '@mui/material';
import { WeatherForecast } from '@shared/ui/WeatherForecast';

export const WeatherWidget = () => {
  const coordinates = useAppSelector((state: RootState) => state.location);
  const dispatch = useAppDispatch();

  const { data, loading, error, refetch } = useFetchWeatherDataQuery({
    variables: {
      lat: coordinates.lat as number,
      lon: coordinates.lon as number,
      limit: 10,
    },
    skip: !coordinates.lat || !coordinates.lon,
  });

  useEffect(() => {
    if (coordinates.lat && coordinates.lon) {
      refetch({
        lat: coordinates.lat,
        lon: coordinates.lon,
        limit: 10,
      });
    }
  }, [coordinates, refetch]);

  useEffect(() => {
    if (loading) {
      dispatch(setLoading(true));
    }

    if (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }

    if (data) {
      dispatch(
        setWeatherData({
          weather: data,
          isLoading: false,
          error: null,
        }),
      );
      dispatch(setLoading(false));
      dispatch(setError(null));
    }
  }, [data, loading, error, dispatch]);

  return (
    <>
      {!data ? (
        <Typography>Не удалось загрузить данные о погоде</Typography>
      ) : (
        <>
          <WeatherCard weather={data}></WeatherCard>
          <WeatherForecast />
        </>
      )}
    </>
  );
};
