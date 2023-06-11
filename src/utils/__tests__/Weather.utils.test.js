import { weatherIcon, countryName, getDateWithoutHour, kelvinToCelcius, shouldShowCityCard, filteredCitiesList, hasSameIndex } from '../Weather.utils';
import { BsBrightnessHigh, BsFillCloudFill, BsFillCloudSnowFill, BsFillCloudLightningRainFill, BsFillCloudDrizzleFill, BsFillCloudSunFill } from 'react-icons/bs';

describe('Utils test - weatherIcon', () => {
  it('Return different values depnding on the state given - Snow', () => {
    const returnedValue = weatherIcon('Snow');

    expect(returnedValue).toBe(BsFillCloudSnowFill);
  });
  it('Return different values - Thunderstorm', () => {
    const returnedValue = weatherIcon('Thunderstorm');

    expect(returnedValue).toBe(BsFillCloudLightningRainFill);
  });
});

describe('Utils test - countryName', () => {
  it('Return the country based on the code', () => {
    const returnedValue = countryName('ES');

    expect(returnedValue).toBe('Spain');
  });

  it('Return different country', () => {
    const returnedValue = countryName('FR');

    expect(returnedValue).toBe('France');
  });
});

describe('Utils test - Modifiers', () => {
  it('getDateWithoutHour - Return the date without hour', () => {
    const returnedValue = getDateWithoutHour('2023-06-11 T09:22:19.084Z');

    expect(returnedValue).toBe('2023-06-11');
  });

  it('kelvinToCelcius - Return the data in Celsius', () => {
    const returnedValue = kelvinToCelcius('290.32');

    expect(returnedValue).toBe(17);
  });
  it('shouldShowCityCard - Return true if there is data written', () => {
    const returnedValue = shouldShowCityCard('City mock');

    expect(returnedValue).toBeTruthy();
  });
});

describe('Utils test - filteredCitiesList', () => {
  it('getDateWithoutHour - Return the correct city if it matches the text', () => {
    const mockCities = [{ name: 'Madrid' }, { name: 'Barcelona' }];
    const returnedValue = filteredCitiesList(mockCities, 'Bar');

    expect(returnedValue).toStrictEqual([mockCities[1]]);
  });
});

describe('Utils test - hasSameIndex', () => {
  it('hasSameIndex - Return true if the index already exist in favList ', () => {
    const mockCities = [
      { name: 'Madrid', id: 12 },
      { name: 'Barcelona', id: 15 },
    ];
    const returnedValue = hasSameIndex(mockCities, 12);

    expect(returnedValue).toBeTruthy();
  });
  it('hasSameIndex - Return false if the index doesnt exist in favList ', () => {
    const mockCities = [
      { name: 'Madrid', id: 12 },
      { name: 'Barcelona', id: 15 },
    ];
    const returnedValue = hasSameIndex(mockCities, 29);

    expect(returnedValue).toBeFalsy();
  });
});
