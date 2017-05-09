import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';

export default () => (
  <Slide transition={["zoom"]}>
    <Heading>
      Using React-mapbox-gl
    </Heading>

    <List>
      <ListItem>GeoJSON compliant components</ListItem>
      <ListItem>Projected layers (Popup, Marker, Cluster)</ListItem>
      <ListItem>All update of props abstracted for you</ListItem>
    </List>

  </Slide>
);
