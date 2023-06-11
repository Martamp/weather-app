import { useContext } from 'react';
import { render } from '@testing-library/react';
import WeatherContext from '../../context/Weather.context';
import useLocation from '../useLocation.hook';

const mockWeatherContext = {
  currentLocation: {
    latitude: 37.7749,
    longitude: -32.4954,
  },
  setCurrentLocation: jest.fn(),
};

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

const MockTestComponent = () => {
  useLocation();
  return null;
};

describe('useLocation', () => {
  beforeEach(() => {
    useContext.mockReturnValue(mockWeatherContext);
  });

  afterEach(() => {
    useContext.mockReset();
  });

  it('should update currentLocation with geolocation data', () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn((success) =>
        success({
          coords: {
            latitude: 37.7749,
            longitude: -32.4954,
          },
        })
      ),
    };

    global.navigator.geolocation = mockGeolocation;

    render(
      <WeatherContext.Provider value={mockWeatherContext}>
        <MockTestComponent />
      </WeatherContext.Provider>
    );

    expect(mockWeatherContext.setCurrentLocation).toHaveBeenCalledWith({
      latitude: 37.7749,
      longitude: -32.4954,
    });
  });
  it('should send an error', () => {
    console.error = jest.fn();

    const mockGeolocation = {
      getCurrentPosition: jest.fn((success, error) => error(new Error('error'))),
    };

    global.navigator.geolocation = mockGeolocation;

    render(
      <WeatherContext.Provider value={mockWeatherContext}>
        <MockTestComponent />
      </WeatherContext.Provider>
    );

    expect(mockWeatherContext.setCurrentLocation).not.toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(expect.objectContaining({ message: 'error' }));
  });
});
