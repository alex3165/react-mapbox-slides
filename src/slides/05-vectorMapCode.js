import React from 'react';
import code from './05-code.raw';
import WrappedCodeSlide from '../CodeSlide';
import { navy } from '../colors';

export default () => (
  <WrappedCodeSlide
    transition={[]}
    lang="js"
    code={code}
    bgColor={navy.toString()}
    ranges={[
      { loc: [0, 1] },
      { loc: [4, 5] },
      { loc: [6, 12] },
      { loc: [13, 35] }
    ]}
  />
)
