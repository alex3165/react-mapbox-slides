import React from 'react';
import { Heading, Slide, Text, Link } from 'spectacle';
import { mint } from '../colors';

export default () => (
  <Slide transition={["slide"]}>
    <Heading size={1} fit caps lineHeight={2} textColor="tertiary">
      Datavisualisation with Deck.gl
    </Heading>
    <Text textColor={mint}>Provide 2D and 3D WebGl layers! (scatterplots, choropleths ...)</Text>
  </Slide>
);
