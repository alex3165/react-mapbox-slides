import React from 'react';
import { Slide, Heading } from 'spectacle';
import BottomLine from '../BottomLine';

export default () => (
  <Slide transition={["zoom"]}>
    <Heading size={4} caps lineHeight={1} textColor="tertiary">
      WebGl map with Mapbox and React
    </Heading>
    <BottomLine/>
  </Slide>
);
