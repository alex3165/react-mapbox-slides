import React from 'react';
import { Slide, Heading, List, ListItem, Appear } from 'spectacle';

export default class RasterVector extends React.Component {
  render() {
    return (
      <Slide>
        <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
          Two approaches
        </Heading>
        <List type="1">
          <Appear>
            <ListItem>Raster tiles: PNG, DOM, small bundle size</ListItem>
          </Appear>
          <Appear>
            <ListItem>Vector tiles: SVG, CANVAS (WebGl), zoom interolation, higly customizable</ListItem>
          </Appear>
        </List>
      </Slide>
    );
  }
};
