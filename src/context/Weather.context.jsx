import { createContext, useContext, useState } from 'react';

export const WeatherContext = createContext({});

export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationsList, setLocations] = useState(null);
  const [inputText, setInputText] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const [favouriteList, setFavouriteList] = useState([]);

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
        setShowInput,
        favouriteList,
        setFavouriteList,
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
