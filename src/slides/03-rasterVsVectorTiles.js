import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';

export default class RasterVector extends React.Component {
  render() {
    return (
      <Slide>
        <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
          Two approaches
        </Heading>
        <List>
          <ListItem>Raster tiles: PNG, DOM, small bundle size</ListItem>
          <ListItem>Vector tiles: SVG, CANVAS (WebGl), zoom interolation, higly customizable</ListItem>
        </List>
      </Slide>
    );
  }
};
