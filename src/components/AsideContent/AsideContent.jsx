import React, { useContext, useState } from 'react';
import { AsideWrapper, InputSearcher, SearchIcon, FavouritesList, FavouritesDegree, FavouriteCard, DataWrapper } from './AsideContent.styled';
import WeatherContext from '../../context/Weather.context';
import { CityCard } from '../CityCard/CityCard';
import { BsStarFill } from 'react-icons/bs';

export const AsideContent = () => {
  const { setInputText, inputText, locationsList, setShowInput, showInput, favouriteList, setFavouriteList } = useContext(WeatherContext);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleShowInput = () => setShowInput(!showInput);

  const handleFavourite = (value) => {
    if (favouriteList.length === 0) {
      setFavouriteList([value]);
    } else {
      const hasSameIndex = favouriteList.some((option) => option.id === value.id);
      const updatedList = hasSameIndex ? favouriteList.filter((city) => city.id !== value.id) : [...favouriteList, value];
      setFavouriteList(updatedList);
    }
  };

  const shouldShowCityCard = inputText?.trim() !== '';
  const filteredList = locationsList ? locationsList?.filter((city) => city.name?.toLowerCase().includes(inputText?.toLowerCase())) : locationsList;
  console.log(filteredList);
  return (
    <AsideWrapper>
      {showInput && <InputSearcher type="text" placeholder="Busca una ciudad" id="search-text" value={inputText} onChange={handleInputChange} />}
      <SearchIcon size="40px" onClick={handleShowInput} className="search-icon" />
      {shouldShowCityCard && filteredList?.map((item) => <CityCard {...item} handleFavourite={() => handleFavourite(item)} />)}
      {(filteredList?.length === 0 || !shouldShowCityCard) && (
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
      )}
    </AsideWrapper>
  );
};
