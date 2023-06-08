import { BsBrightnessHigh, BsFillCloudFill, BsFillCloudSnowFill, BsFillCloudLightningRainFill, BsFillCloudDrizzleFill, BsFillCloudSunFill } from 'react-icons/bs';
import { countries } from 'countries-list';

export const weatherIcon = (state) => {
  switch (state) {
    case 'Clouds':
      return BsFillCloudFill;
    case 'Clear':
      return BsBrightnessHigh;
    case 'Snow':
      return BsFillCloudSnowFill;
    case 'Thunderstorm':
      return BsFillCloudLightningRainFill;
    case 'Rain':
      return BsFillCloudDrizzleFill;
    case 'Drizzle':
      return BsFillCloudSunFill;
    default:
      return BsBrightnessHigh;
  }
};

export const countryName = (countryCode) => countries[countryCode].name;

export const getDateWithoutHour = (date) => date.split(' ')[0];

export const farenheitToCelcius = (temp) => Math.floor(temp - 273.15);
