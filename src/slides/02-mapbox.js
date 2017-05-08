import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';

export default class Mapbox extends React.Component {
  render() {
    return (
      <Slide transition={["zoom"]}>
        <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
          What's Mapbox ?
        </Heading>

        <List>
          <ListItem>A company</ListItem>
          <ListItem>Provide tools for building a map</ListItem>
          <ListItem>Use Openstreetmap data</ListItem>
        </List>
      </Slide>
    );
  }
};
