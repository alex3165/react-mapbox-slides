import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';

export default () => (
  <Slide transition={["slide"]}>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      Who is using web map ?
    </Heading>
    <List>
      <ListItem textSize={38}>Contact page</ListItem>
      <ListItem textSize={38}>Core component: Deliveroo, Uber, Citymapper, Airbnb</ListItem>
    </List>
  </Slide>
);
