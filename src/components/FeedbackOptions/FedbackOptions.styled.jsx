import styled from '@emotion/styled';

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
  color: #ffffff;
  background-color: #2c24f3;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #4f49f6;
  }
`;
