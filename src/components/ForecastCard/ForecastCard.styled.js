import styled from 'styled-components';

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
`;

export const Card = styled.div`
  margin: 1rem;
  grid-row: 2;
  grid-column: 1 / span 2;
`;
