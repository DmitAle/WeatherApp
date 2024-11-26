import { useRef, useState } from 'react';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { Box, Typography, IconButton, Card } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import { getHourseWeather } from './utils/getHoursWeather';
import { HourlyWeather } from './models/HourseWeather';

import * as styles from './weatherHourse.module.css';
import ArrowNext from '@shared/assets/icons/ArrowNext.svg';
import ArrowPrev from '@shared/assets/icons/ArrowPrev.svg';

export const WeatherHours = () => {
  const weather = useAppSelector((state: RootState) => state.weather);

  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(true);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const hoursWeather: HourlyWeather = getHourseWeather(weather.weather);

  const handleSlideChange = (swiper: any) => {
    setIsStart(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '4px', gap: '4px' }}>
      <IconButton
        sx={{ transform: 'rotate(180deg)', width: '30px', height: '30px' }}
        className={styles.sliderPrev}
        disabled={isStart}
        ref={prevRef}
      >
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
      >
        {hoursWeather.map((hourse, index) => (
          <SwiperSlide key={index} style={{ maxWidth: '60px' }}>
            <Card
              sx={{
                boxShadow: 'none',
                background: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'column',
                width: '60px',
                color: '#fff',
                gap: '4px',
              }}
            >
              <Typography sx={{ opacity: '.7', fontSize: '14px' }}>{hourse.time}</Typography>
              <img src={hourse.icon} alt={`icon-${index}`} />
              <Typography sx={{ fontSize: '14px' }}>{hourse.temperature}</Typography>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <IconButton sx={{ width: '30px', height: '30px' }} className={styles.sliderNext} disabled={isEnd} ref={nextRef}>
        <ArrowNext />
      </IconButton>
    </Box>
  );
};
