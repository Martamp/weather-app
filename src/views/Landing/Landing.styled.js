import styled, { keyframes } from 'styled-components';
import { MEDIA_QUERIES } from '../../constants/mediaQuery';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LandingGrid = styled.main`
  display: grid;
  min-height: 100vh;
  position: relative;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 0.8fr;
  grid-template-areas:
    'left right'
    'footer footer';

  ${MEDIA_QUERIES.onlyMobile} {
    width: 100vw;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      'left'
      'right'
      'footer';
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100wh;
  height: 100vh;
`;

export const LoadingIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotate} 2s infinite linear;
`;
