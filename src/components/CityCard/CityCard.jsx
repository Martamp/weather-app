import React, { useContext } from 'react';
import { CardWrapper, DataWrapper } from './CityCard.styled';
import { BsStar, BsBrightnessHigh, BsStarFill } from 'react-icons/bs';
import WeatherContext from '../../context/Weather.context';

export const CityCard = (props) => {
  const { setCurrentLocation, setInputText, favouriteList, setLocations } = useContext(WeatherContext);
  const sameIndex = favouriteList.some((option) => option.id === props.id);
  const Star = sameIndex ? BsStarFill : BsStar;

  const handleOnClick = () => {
    setCurrentLocation({
      latitude: props.latitude,
      longitude: props.longitude,
    });
    setInputText('');
  };
  return (
    <CardWrapper>
      <DataWrapper onClick={handleOnClick} role="button">
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
