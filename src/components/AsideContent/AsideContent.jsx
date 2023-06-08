import React, { useContext, useEffect } from 'react';
import { AsideWrapper, InputSearcher, SearchIcon, FavouritesList, FavouritesDegree, FavouriteCard, DataWrapper } from './AsideContent.styled';
import WeatherContext from '../../context/Weather.context';
import { CityCard } from '../CityCard/CityCard';
import { BsStarFill } from 'react-icons/bs';
import { UseAsyncInformation } from '../../hooks/useAsyncInfo.hook';
import { filteredCitiesList, shouldShowCityCard } from '../../utils/Weather.utils';

export const AsideContent = () => {
  const { getLocation } = UseAsyncInformation();
  const { setInputText, inputText, locationsList, showInput, favouriteList, onShowInput, handleFavourite, handleLocation } = useContext(WeatherContext);

  useEffect(() => {
    inputText?.length > 3 && getLocation();
  }, [inputText]);

  const onInputChange = (event) => setInputText(event.target.value);

  const showCityCard = shouldShowCityCard(inputText);
  const filteredCities = filteredCitiesList(locationsList, inputText);

  return (
    <AsideWrapper>
      {showInput && <InputSearcher type="text" placeholder="Busca una ciudad" id="search-text" value={inputText} onChange={onInputChange} />}
      <SearchIcon size="40px" onClick={onShowInput} className="search-icon" />
      {showCityCard && filteredCities?.map((item) => <CityCard {...item} handleFavourite={() => handleFavourite(item)} handleOnClick={() => handleLocation(item)} />)}
      {(filteredCities?.length === 0 || !showCityCard) && (
        <FavouritesList>
          {favouriteList?.map((item) => (
            <FavouriteCard>
              <DataWrapper onClick={() => handleLocation(item)}>
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
