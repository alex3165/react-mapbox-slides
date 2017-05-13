import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';

export default () => (
  <Slide transition={["slide"]}>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      Using React-mapbox-gl
    </Heading>
    <List>
      <ListItem textSize={38}>Projected components: Popup, Marker, Cluster</ListItem>
      <ListItem textSize={38}>Fake components: Layer, Source, Feature ...</ListItem>
      <ListItem textSize={38}>Referenced on mapbox.com</ListItem>
    </List>
  </Slide>
);
