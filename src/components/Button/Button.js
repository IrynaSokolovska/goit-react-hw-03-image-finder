import React, { Component } from 'react';
import { WrapperBtn, LoadMoreBtn } from './Button.styled';

export class Button extends Component {
  render() {
    return (
      <WrapperBtn>
        <LoadMoreBtn type="submit">Load more</LoadMoreBtn>
      </WrapperBtn>
    );
  }
}

export default Button;
