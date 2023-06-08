import { useEffect, useContext } from 'react';
import WeatherContext from '../context/Weather.context';

const useLocation = () => {
  const { currentLocation, setCurrentLocation } = useContext(WeatherContext);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Localizacion no disponible');
    }
  }, []);

  return currentLocation;
};

export default useLocation;
