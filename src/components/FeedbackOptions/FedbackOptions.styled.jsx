import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  min-width: 100px;
  padding: 10px;

  font-size: 14px;
  text-transform: uppercase;
  color: #1707f7;
  background-color: #f7f705;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 250ms linear;

  &:hover {
    color: #f7f705;
    background-color: #0635f4;
    transform: scale(1.1);
  }
`;
