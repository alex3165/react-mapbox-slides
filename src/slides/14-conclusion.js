import React from 'react';
import { Heading, Slide, List, ListItem } from 'spectacle';

const containerStyle = {
  height: 500,
  width: '100%'
};

export default () => (
  <Slide transition={["slide"]}>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      More around map
    </Heading>
    <List>
      <ListItem>Geocoding: Address (string) -> Coordinates</ListItem>
      <ListItem>Routing: Calculate paths</ListItem>
    </List>
  </Slide>
);
