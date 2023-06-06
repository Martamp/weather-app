import { createContext, useContext, useState } from 'react';

export const WeatherContext = createContext({});

export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <WeatherContext.Provider
      value={{
        data,
        error,
        loading,
        setData,
        setError,
        setLoading,
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
