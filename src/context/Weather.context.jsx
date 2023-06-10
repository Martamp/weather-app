import { createContext, useContext, useState } from 'react';
import { hasSameIndex } from '../utils/Weather.utils';

export const WeatherContext = createContext({});

export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationsList, setLocations] = useState(null);
  const [inputText, setInputText] = useState('');
  const [forecastData, setForecastData] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const [favouriteList, setFavouriteList] = useState([]);

  const handleFavourite = (value) => {
    if (favouriteList.length === 0) {
      setFavouriteList([value]);
    } else {
      const isSameCity = hasSameIndex(favouriteList, value.id);
      const limitFavList = favouriteList.length < 3 ? [...favouriteList, value] : favouriteList;
      const updatedList = isSameCity ? favouriteList.filter((city) => city.id !== value.id) : limitFavList;
      setFavouriteList(updatedList);
    }
  };

  const handleLocation = (item) => {
    setCurrentLocation({
      latitude: item.latitude,
      longitude: item.longitude,
    });
    setInputText('');
  };

  const onShowInput = () => setShowInput(!showInput);

  return (
    <WeatherContext.Provider
      value={{
        data,
        error,
        loading,
        setData,
        setError,
        setLoading,
        currentLocation,
        setCurrentLocation,
        locationsList,
        setLocations,
        inputText,
        setInputText,
        forecastData,
        setForecastData,
        showInput,
        favouriteList,
        handleFavourite,
        handleLocation,
        onShowInput,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherProvider = () => useContext(WeatherContext);
export const podcastProvider = (Component) => (props) =>
  (
    <WeatherProvider>
      <Component {...props} />
    </WeatherProvider>
  );
export default WeatherContext;
