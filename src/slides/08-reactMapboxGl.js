import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';

export default () => (
  <Slide transition={["slide"]}>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      Using React-mapbox-gl
    </Heading>

    <List>
      <ListItem>Projected layers (Popup, Marker, Cluster)</ListItem>
      <ListItem>All update of props abstracted for you</ListItem>
      <ListItem>Written in Typescript</ListItem>
    </List>

  </Slide>
);
