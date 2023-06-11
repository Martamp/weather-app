import styled from 'styled-components';
import { MEDIA_QUERIES } from '../../constants/mediaQuery';

export const ForecastWapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  color: white;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.1);
  max-width: 180px;
  height: 180px;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
`;

export const Card = styled.li`
  margin: 0.5rem;
`;

export const DegreeText = styled.p`
  font-size: 2rem;
  color: var(--tertiary-color);
`;

export const PrevisionList = styled.ul`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  list-style: none;
  flex-wrap: wrap;
  padding: 0;

  ${MEDIA_QUERIES.onlyMobile} {
    flex-wrap: wrap;
    gap: 1rem;
  }
`;
