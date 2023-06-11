import React, { useContext } from 'react';
import WeatherContext from '../../context/Weather.context';
import { weatherIcon, getDateWithoutHour, kelvinToCelcius } from '../../utils/Weather.utils';
import { ForecastWapper, Card, PrevisionList, DegreeText } from './ForecastCard.styled';

export const ForecastCard = () => {
  const { forecastData } = useContext(WeatherContext);
  const dateList = [];
  const getIcon = (item) => {
    const WeatherIcon = weatherIcon(item.weather[0].main);
    return <WeatherIcon size="90px" />;
  };

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

  return (
    <PrevisionList data-testid="forecastId">
      {dateList.map((item, i) => (
        <Card key={i} data-testid="forecastCardId">
          <ForecastWapper>
            <DegreeText data-testid="forecastDataId">{kelvinToCelcius(item.main.temp)}°</DegreeText>
            {getIcon(item)}
            <p data-testid="forecastHourId">{getDateWithoutHour(item.dt_txt)}</p>
          </ForecastWapper>
        </Card>
      ))}
    </PrevisionList>
  );
};
