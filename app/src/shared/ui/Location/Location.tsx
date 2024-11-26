import LocationIcon from '@shared/assets/icons/location.svg';
import { IconButton } from '@mui/material';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { setCoordinates, setCoordinatesError } from '@features/getLocation';
import { useEffect } from 'react';

export const Location = () => {
  const dispatch = useAppDispatch();

  const getCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(setCoordinates({ lat: latitude, lon: longitude }));
        },
        (err) => {
          dispatch(setCoordinatesError(`Не удалось получить координаты - ${err}`));
        },
      );
    } else {
      dispatch(setCoordinatesError('Не удалось получить доступ к координатам'));
    }
  };

  useEffect(() => {
    getCoordinates();
  }, []);

  return (
    <div>
      <IconButton onClick={getCoordinates}>
        <LocationIcon />
      </IconButton>
    </div>
  );
};
