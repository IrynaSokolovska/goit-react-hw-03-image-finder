import styled from 'styled-components';

export const WrapperBtn = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const LoadMoreBtn = styled.button`
  padding: 8px 16px;
  border-radius: 4x;
  background-color: #102493;
  text-align: center;
  display: inline-block;
  margin: 0 auto;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  min-width: 180px;

  &:hover,
  &:focus {
    background-color: red;
  }
`;
