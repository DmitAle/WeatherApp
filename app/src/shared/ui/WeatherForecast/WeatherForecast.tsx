import { useState, useRef } from 'react';
import { i18n } from '@shared/utils/i18n';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import { Box, Typography, IconButton, Card } from '@mui/material';
import { useAppSelector } from '@shared/hooks/useAppSelector';

import { getForecastWeather } from './utils/getForecastWeather';

import * as styles from './forecastWeather.module.css';
import weatherDayBg from '@shared/assets/icons/WeatherDayBg.jpg';
import weatherNightBg from '@shared/assets/icons/WeatherNightBg.jpg.jpg';
import ArrowNext from '@shared/assets/icons/ArrowNext.svg';
import ArrowPrev from '@shared/assets/icons/ArrowPrev.svg';
import 'swiper/css';

export const WeatherForecast = () => {
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(true);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const weather = useAppSelector((state: RootState) => state.weather);

  const forecastWeather = getForecastWeather(weather.weather);

  const handleSlideChange = (swiper: any) => {
    setIsStart(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const currentHours = new Date().getHours();
  const countDays = weather.weather?.weatherByPoint.forecast.days.length;

  let renameDay = '';

  if (countDays && (countDays % 10 > 4 || (countDays > 9 && countDays < 20))) {
    renameDay = `${i18n('forecast')} ${countDays} ${i18n('days')}`;
  } else if (countDays) {
    renameDay = `${i18n('forecast')} ${countDays} ${i18n('day')}`;
  }

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
        width: 'fit-content',
        maxHeight: '245px',
      }}
    >
      <Typography variant="h6">{renameDay}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        <IconButton sx={{ transform: 'rotate(180deg)' }} className={styles.sliderPrev} disabled={isStart} ref={prevRef}>
          <ArrowPrev />
        </IconButton>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          slidesPerView="auto"
          slidesPerGroup={3}
          onSlideChange={handleSlideChange}
          style={{ marginLeft: 0 }}
        >
          {forecastWeather.map((day, index) => (
            <SwiperSlide key={index} style={{ width: '100px' }}>
              <Card
                sx={{
                  boxShadow: 'none',
                  background: 'none',
                  color: '#fff',
                  maxWidth: '100px',
                  padding: index === 0 && index < forecastWeather.length ? '8px 0' : '8px',
                }}
              >
                <Typography sx={{ fontSize: '18px' }}>{day.dayOfWeek}</Typography>
                <Typography sx={{ opacity: '.8', fontSize: '14px' }}>{day.date}</Typography>
                <img src={day.icon} style={{ width: '50px' }} />
                <Typography sx={{ fontSize: '14px' }}>{day.maxTemperature}°</Typography>
                <Typography sx={{ opacity: '.8', fontSize: '14px' }}>{day.minTemperature}°</Typography>
                <Typography sx={{ opacity: '.8', fontSize: '14px' }}>{day.condition}</Typography>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <IconButton className={styles.sliderNext} disabled={isEnd} ref={nextRef}>
          <ArrowNext />
        </IconButton>
      </Box>
    </Card>
  );
};
