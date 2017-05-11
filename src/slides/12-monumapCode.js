import React from 'react';
import code from './12-code.raw';
import WrappedCodeSlide from '../CodeSlide';
import { navy } from '../colors';

export default () => (
  <WrappedCodeSlide
    transition={['zoom']}
    lang="jsx"
    code={code}
    bgColor={navy.toString()}
    ranges={[
      { loc: [144, 155] },
      { loc: [84, 100] },
      { loc: [65, 83] },
    ]}
  />
)
