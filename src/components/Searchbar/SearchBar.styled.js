import styled from 'styled-components';

export const SearchBarDiv = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #102493;
`;
export const SearchBarForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
`;
export const SearchBarInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 14px;
  }
`;
