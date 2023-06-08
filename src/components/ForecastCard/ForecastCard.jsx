import React, { useEffect, useContext } from 'react';
import WeatherContext from '../../context/Weather.context';
import { ForecastWapper, Card, PrevisionList, DegreeText } from './ForecastCard.styled';
import { weatherIcon, getDateWithoutHour, farenheitToCelcius } from '../../utils/Weather.utils';

export const ForecastCard = () => {
  const dateList = [];

  const { forecastData } = useContext(WeatherContext);
  if (forecastData) {
    for (let i = 0; i < forecastData.list?.length; i++) {
      if (i > 0) {
        let prev = forecastData?.list[i - 1];
        let day = new Date(forecastData?.list[i].dt_txt);
        let prevDay = new Date(prev.dt_txt);

        if (day.getDay() !== prevDay.getDay()) {
          dateList.push(forecastData.list[i]);
        }
      }
    }
  }
  const getIcon = (item) => {
    const WeatherIcon = weatherIcon(item.weather[0].main);
    return <WeatherIcon size="90px" />;
  };

  return (
    <PrevisionList>
      {dateList.map((item, i) => (
        <Card key={i}>
          <ForecastWapper>
            <DegreeText>{farenheitToCelcius(item.main.temp)}°</DegreeText>
            {getIcon(item)}
            <p>{getDateWithoutHour(item.dt_txt)}</p>
          </ForecastWapper>
        </Card>
      ))}
    </PrevisionList>
  );
};
