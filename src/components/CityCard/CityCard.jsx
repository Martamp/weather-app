import React, { useContext } from 'react';
import { CardWrapper, DataWrapper } from './CityCard.styled';
import { BsStar, BsBrightnessHigh, BsStarFill } from 'react-icons/bs';
import WeatherContext from '../../context/Weather.context';

export const CityCard = (props) => {
  const { favouriteList } = useContext(WeatherContext);
  const sameIndex = favouriteList.some((option) => option.id === props.id);
  const Star = sameIndex ? BsStarFill : BsStar;

  return (
    <CardWrapper>
      <DataWrapper onClick={props.handleOnClick} role="button">
        <BsBrightnessHigh size="30px" />
        <div>
          <p>{props.name}</p>
          <p>{props.country}</p>
        </div>
      </DataWrapper>
      <Star size="20px" onClick={() => props.handleFavourite(props)} />
    </CardWrapper>
  );
};
