import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';

export default () => (
  <Slide transition={["slide"]}>
    <Heading>
      React integration
    </Heading>
    <List>
      <ListItem>Declarative API</ListItem>
      <ListItem>Updates of props abstracted for you</ListItem>
    </List>
  </Slide>
);
