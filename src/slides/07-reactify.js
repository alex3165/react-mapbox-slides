import React from 'react';
import code from './07-code.raw';
import WrappedCodeSlide from '../CodeSlide';
import { navy } from '../colors';

export default () => (
  <WrappedCodeSlide
    transition={[]}
    lang="js"
    code={code}
    bgColor={navy.toString()}
    ranges={[
      { loc: [5, 19] },
      { loc: [20, 27] }
    ]}
  />
)
