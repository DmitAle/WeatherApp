import { useEffect } from 'react';
import { Box, Card, Divider, Typography } from '@mui/material';

import { getFormatedData } from './utils/getFormatedData';
import { weatherData } from '@entities/weatherData/WeatherData';
import { i18n } from '@shared/utils/i18n';

import { WeatherHours } from '@shared/ui/WeatherHours';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { fetchLocationAction } from '@features/getLocation';
import { setLocationError } from '@features/getLocation';

import weatherDayBg from '@shared/assets/icons/WeatherDayBg.jpg';
import weatherNightBg from '@shared/assets/icons/WeatherNightBg.jpg.jpg';
import WindIcon from '@shared/assets/icons/Wind.svg';

export const WeatherCard = (props: weatherData) => {
  const coordinates = useAppSelector((state: RootState) => state.location);
  const dispatch = useAppDispatch();

  const weatherData = getFormatedData(props);

  useEffect(() => {
    if (coordinates.lat && coordinates.lon) {
      dispatch(fetchLocationAction({ lat: coordinates.lat, lon: coordinates.lon }));
    } else {
      dispatch(setLocationError('Координаты отсутствуют'));
    }
  }, [coordinates]);

  const currentHours = new Date().getHours();

  return (
    <Card
      sx={{
        padding: 2,
        backgroundImage: currentHours > 5 && currentHours < 20 ? `url(${weatherDayBg})` : `url(${weatherNightBg})`,
        backgroundSize: 'cover',
        color: '#fff',
        borderRadius: 3,
        boxShadow: 3,
        maxWidth: '500px',
      }}
    >
      <Box>
        <Typography variant="h6">{`${coordinates?.city}, ${coordinates.cityDistrict}`}</Typography>
        <Box sx={{ display: 'flex' }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
            {weatherData.temperature}°
          </Typography>
          <img src={weatherData.icon} style={{ width: '50px' }} />
        </Box>
        <Typography variant="body1">{weatherData.condition}</Typography>
        <Typography>{`${i18n('feelsLike')} ${weatherData.feelsLike}°`}</Typography>
        <Box display="flex" sx={{ gap: '4px', margin: '4px 0' }}>
          <WindIcon />
          <Typography>
            {weatherData.windSpeed > 0
              ? `${weatherData.windSpeed} м/с, ${weatherData.windDirection}`
              : `${weatherData.windDirection}`}
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, .3)' }} />
      <WeatherHours></WeatherHours>
    </Card>
  );
};
