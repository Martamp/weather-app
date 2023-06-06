import React, { useEffect, useContext } from 'react';
import { ForecastWapper, Card } from './ForecastCard.styled';
import CloudIcon from '../../assets/clouds.png';
import { BsBrightnessHigh } from 'react-icons/bs';

export const ForecastCard = () => {
  return (
    <Card>
      <ForecastWapper>
        <p>65</p>
        <BsBrightnessHigh size="50px" />
        <p>Dia de la semana</p>
      </ForecastWapper>
    </Card>
  );
};
