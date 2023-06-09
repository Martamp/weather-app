import styled, { keyframes } from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { MEDIA_QUERIES } from '../../constants/mediaQuery';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const InputSearcher = styled.input`
  width: 90%;
  padding: 0.5rem;
  box-szing: border-box;
  border-radius: 0.25rem;
  border: 0;
  opacity: 0;
  transform: translateY(-10px);
  animation: ${fadeInAnimation} 0.5s forwards;
`;

export const AsideWrapper = styled.section`
  grid-area: right;
  padding: 5rem;
  position: absolute;
  width: -webkit-fill-available;
  z-index: 1;

  ${MEDIA_QUERIES.onlyMobile} {
    display: block;
    position: unset;
    padding: 0 0 1rem 1rem;
  }
`;
export const IconWrapper = styled.div`
  ${MEDIA_QUERIES.onlyMobile} {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
  }
`;

export const SearchIcon = styled(BsSearch)`
  cursor: pointer;
  position: absolute;
  right: 3rem;

  ${MEDIA_QUERIES.onlyMobile} {
    position: unset;
  }
`;

export const IconSubtitle = styled.p`
  display: none;

  ${MEDIA_QUERIES.onlyMobile} {
    display: block;
  }
`;

export const FavouritesList = styled.ul`
  padding: 0;
`;

export const FavouritesDegree = styled.p`
  font-size: 2rem;
  font-weight: var(--light-size);
`;
export const FavouriteCard = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  color: var(--tertiary-color);
  border-bottom: 1px solid white;
  width: 90%;

  p:first-child {
    font-size: 2rem;
    padding-bottom: 0.5rem;
  }
`;

export const CityCardWrapper = styled.ul`
  padding: 0;
  margin-right: 2rem;

  ${MEDIA_QUERIES.onlyMobile} {
    margin-right: 1rem;
  }
`;
export const DataWrapper = styled.div`
  cursor: pointer;
  width: 70%;
`;
