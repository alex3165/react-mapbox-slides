import React, { Component } from 'react';
import CodeSlide from 'spectacle-code-slide';
import styled from 'styled-components';

// Prevent animation hook for PFC
CodeSlide.prototype.componentWillEnter = function () {};
CodeSlide.prototype.componentWillAppear = function () {};
CodeSlide.prototype.componentWillLeave = function () {};

const StyledCodeSlide = styled(CodeSlide)`
  max-height: 100% !important;
  height: 100% !important;
  width: 95% !important;
  max-width: 900px !important;

  > pre {
    font-size: 1.3rem !important;
    height: 100% !important;
  }

  > div {
    text-align: center !important;
    width: auto !important;
    left: 4rem !important;
    right: 4rem !important;
    bottom: 3rem !important;
    font-family: inherit !important;
    font-size: 2rem;
    border-radius: 0.5rem;
  }

  > img {
    border-radius: 0.5rem;
  }
`;

export default class WrappedCodeSlide extends Component {
  render () {
    return (
      <StyledCodeSlide
        {...this.props}
        transition={[]}
      />
    )
  }
}
