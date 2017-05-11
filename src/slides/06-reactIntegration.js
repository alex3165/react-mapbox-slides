import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';

export default () => (
  <Slide transition={["slide"]}>
    <Heading>
      React integration
    </Heading>

    <List>
      <ListItem>API not declarative</ListItem>
      <ListItem>Lots of update logic</ListItem>
    </List>

  </Slide>
);
