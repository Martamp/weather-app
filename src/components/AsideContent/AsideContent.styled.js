import styled, { keyframes } from 'styled-components';
import { BsSearch } from 'react-icons/bs';

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
  width: 80%;
  padding: 0.5rem;
  box-szing: border-box;
  opacity: 0;
  transform: translateY(-10px);
  animation: ${fadeInAnimation} 0.5s forwards;
`;

export const AsideWrapper = styled.section`
  grid-row: 1;
  grid-column: 2;
  padding: 5rem;
  position: absolute;
  width: -webkit-fill-available;
  z-index: 1;
`;

export const SearchIcon = styled(BsSearch)`
  cursor: pointer;
  position: absolute;
  right: 3rem;
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
  width: 80%;

  p:first-child {
    font-size: 2rem;
    padding-bottom: 0.5rem;
  }
`;
export const DataWrapper = styled.div``;
