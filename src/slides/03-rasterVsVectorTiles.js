import React from 'react';
import { Slide, Heading, List, ListItem, Appear } from 'spectacle';

export default () => (
  <Slide transition={["slide"]}>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      Two approaches
    </Heading>
    <List type="1">
      <Appear>
        <ListItem>DOM / Raster tiles: PNG, small bundle size, SSR</ListItem>
      </Appear>
      <Appear>
        <ListItem>CANVAS (WebGl) / Vector tiles: SVG, zoom interpolation, higly customizable</ListItem>
      </Appear>
    </List>
  </Slide>
);
