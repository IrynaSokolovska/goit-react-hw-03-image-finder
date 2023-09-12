import React from 'react';
import { WrapperBtn, LoadMoreBtn } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <WrapperBtn>
      <LoadMoreBtn type="submit" onClick={onLoadMore}>
        Load more
      </LoadMoreBtn>
    </WrapperBtn>
  );
};

export default Button;
