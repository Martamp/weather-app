import React, { useContext } from 'react';
import { BsStar, BsBrightnessHigh, BsStarFill } from 'react-icons/bs';
import WeatherContext from '../../context/Weather.context';
import { hasSameIndex } from '../../utils/Weather.utils';
import { CardWrapper, DataWrapper } from './CityCard.styled';

export const CityCard = (props) => {
  const { favouriteList } = useContext(WeatherContext);

  const Star = hasSameIndex(favouriteList, props.id) ? BsStarFill : BsStar;
  const ariaData = hasSameIndex(favouriteList, props.id) ? 'delete' : 'add';
  return (
    <CardWrapper data-testid="cardId">
      <DataWrapper onClick={props.handleOnClick} role="button" aria-label={`Click to check the current weather of ${props.name}`}>
        <BsBrightnessHigh size="30px" />
        <div>
          <p>{props.name}</p>
          <p>{props.country}</p>
        </div>
      </DataWrapper>
      <Star size="20px" onClick={() => props.handleFavourite(props)} aria-label={`Click to ${ariaData} ${props.name} from favourites`} />
    </CardWrapper>
  );
};
