import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';

export default class DisplayMap extends React.Component {
  render() {
    return (
      <Slide transition={["zoom"]}>
        <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
          Who is using web map ?
        </Heading>
        <List>
          <ListItem>Simple contact page</ListItem>
          <ListItem>Complexe business logic: Deliveroo, Uber, Citymapper, Airbnb</ListItem>
        </List>
      </Slide>
    );
  }
};
