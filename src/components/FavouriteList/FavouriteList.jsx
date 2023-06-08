import React, { useContext } from 'react';
import { FavouritesList, FavouriteCard, DataWrapper } from './FavouriteList.styled';
import WeatherContext from '../../context/Weather.context';
import { BsStarFill } from 'react-icons/bs';

export const AsideContent = () => {
  const { favouriteList, setFavouriteList } = useContext(WeatherContext);

  const handleFavourite = (value) => {
    if (favouriteList.length === 0) {
      setFavouriteList([value]);
    } else {
      const hasSameIndex = favouriteList.some((option) => option.id === value.id);
      const updatedList = hasSameIndex ? favouriteList.filter((city) => city.id !== value.id) : [...favouriteList, value];
      setFavouriteList(updatedList);
    }
  };

  return (
    <FavouritesList>
      {favouriteList?.map((item) => (
        <FavouriteCard>
          <DataWrapper>
            <p>{item.name}</p>
            <p>{item.country}</p>
          </DataWrapper>
          <BsStarFill size="20px" onClick={() => handleFavourite(item)} />
        </FavouriteCard>
      ))}
    </FavouritesList>
  );
};
