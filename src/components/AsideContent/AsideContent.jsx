import React, { useContext, useEffect } from 'react';
import { BsStarFill } from 'react-icons/bs';
import WeatherContext from '../../context/Weather.context';
import { CityCard } from '../CityCard/CityCard';
import { UseAsyncInformation } from '../../hooks/useAsyncInfo.hook';
import { filteredCitiesList, shouldShowCityCard } from '../../utils/Weather.utils';
import { AsideWrapper, InputSearcher, SearchIcon, FavouritesList, CityCardWrapper, FavouriteCard, DataWrapper, IconWrapper, IconSubtitle } from './AsideContent.styled';

export const AsideContent = () => {
  const { getLocation } = UseAsyncInformation();
  const { setInputText, inputText, locationsList, showInput, favouriteList, onShowInput, handleFavourite, handleLocation } = useContext(WeatherContext);

  useEffect(() => {
    //start the call after the user has written at least 3 chars
    inputText?.length > 3 && getLocation();
  }, [inputText]);

  const onInputChange = (event) => setInputText(event.target.value);

  const showCityCard = shouldShowCityCard(inputText);
  const filteredCities = filteredCitiesList(locationsList, inputText);

  return (
    <AsideWrapper>
      <IconWrapper>
        <SearchIcon data-testid="searchIconId" size="40px" onClick={onShowInput} className="search-icon" />
        <IconSubtitle>Click the icon to search by city</IconSubtitle>
      </IconWrapper>
      {showInput && <InputSearcher data-testid="inputSearcherId" type="text" placeholder="Search a city" id="search-text" value={inputText} onChange={onInputChange} />}
      <CityCardWrapper>{showInput && showCityCard && filteredCities?.map((item) => <CityCard {...item} handleFavourite={() => handleFavourite(item)} handleOnClick={() => handleLocation(item)} data-testid="cityCardId" key={item.id} />)}</CityCardWrapper>
      {(filteredCities?.length === 0 || !showCityCard || !showInput) && (
        <FavouritesList>
          {favouriteList?.map((item) => (
            <FavouriteCard data-testid="favouiteCardId" key={item.id}>
              <DataWrapper onClick={() => handleLocation(item)}>
                <p>{item.name}</p>
                <p>{item.country}</p>
              </DataWrapper>
              <BsStarFill data-testid="favIconId" size="20px" onClick={() => handleFavourite(item)} />
            </FavouriteCard>
          ))}
        </FavouritesList>
      )}
    </AsideWrapper>
  );
};
