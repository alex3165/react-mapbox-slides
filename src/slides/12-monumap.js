import React from 'react';
import { Heading, Slide, Text, Link } from 'spectacle';
import { mint } from '../colors';

export default () => (
  <Slide transition={["slide"]}>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      Monumap.org
    </Heading>
    <Text textColor={mint}>All the UNESCO sites in one map</Text>
  </Slide>
);
