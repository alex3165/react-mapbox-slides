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
      { loc: [0, 1], title: "First we import" },
      { loc: [4, 5], title: "We set the map token" },
      { loc: [6, 12], title: "We Instantiate mapboxgl" },
      { loc: [13, 35], title: "Add 3d building layer" }
    ]}
  />
)
