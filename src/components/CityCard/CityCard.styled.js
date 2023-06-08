import styled from 'styled-components';

export const DataWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 70%;
`;

export const CardWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
  background-color: rgb(0 0 0 / 23%);
  cursor: pointer;

  p:last-child {
    color: var(--secondary-color);
  }
`;
