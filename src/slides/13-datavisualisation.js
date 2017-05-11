import React from 'react';
import { Heading, Slide, Text, Link } from 'spectacle';

export default () => (
  <Slide transition={["slide"]}>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      Data visualisation with Deck.gl
    </Heading>
    <Text>Provide 2D and 3D WebGl layers! (scatterplots, choropleths ...)</Text>
  </Slide>
);
