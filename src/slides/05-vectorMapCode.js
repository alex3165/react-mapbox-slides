import React from 'react';
import code from './05-code.raw';
import WrappedCodeSlide from '../CodeSlide';
import { navy } from '../colors';

export default () => (
  <WrappedCodeSlide
    transition={['slide']}
    lang="js"
    code={code}
    bgColor={navy.toString()}
    ranges={[
      { loc: [0, 1], title: 'Vector map implementation' },
      { loc: [4, 5], title: 'Vector map implementation' },
      { loc: [6, 12] },
      { loc: [13, 35] }
    ]}
  />
)
