import React from 'react';
import code from './10-code.raw';
import WrappedCodeSlide from '../CodeSlide';
import { navy } from '../colors';

export default () => (
  <WrappedCodeSlide
    transition={['zoom']}
    lang="jsx"
    code={code}
    bgColor={navy.toString()}
    ranges={[
      { loc: [6, 21] },
      { loc: [52, 68] },
      { loc: [99, 106] },
      { loc: [107, 123] },
      { loc: [107, 111] },
      { loc: [114, 120] },
      { loc: [125, 130] },
      { loc: [130, 143] },
    ]}
  />
)
