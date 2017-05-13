import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';

export default () => (
  <Slide transition={["slide"]}>
    <Heading fit caps lineHeight={1} textColor="tertiary">
      What's Mapbox ?
    </Heading>

    <List>
      <ListItem>A company in the Valley</ListItem>
      <ListItem>Provide a complete GIS</ListItem>
      <ListItem>Data: From the comunity (OSM)</ListItem>
    </List>
  </Slide>
);
