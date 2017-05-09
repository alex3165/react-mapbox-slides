import React from 'react';
import { Slide, Heading } from 'spectacle';
import LondonCycle from './09-londonCycle';

export default () => (
  <Slide transition={["zoom"]}>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">London bike stations</Heading>
    <LondonCycle/>
  </Slide>
);
