import React from 'react';
import { Heading, Slide, Text, Link } from 'spectacle';
import { mint } from '../colors';

export default () => (
  <Slide transition={["slide"]}>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      Mapbox studio
    </Heading>
    <Text textColor={mint}>Customise 100% of the content of your map!</Text>
  </Slide>
)
