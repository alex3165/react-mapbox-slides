import React from 'react';
import { Heading, Slide, List, ListItem, Text } from 'spectacle';
import BottomLine from '../BottomLine';
import { mint, white } from '../colors';

const containerStyle = {
  height: 500,
  width: '100%'
};

export default () => (
  <Slide transition={["slide"]}>
    <Text textColor={white.toString()} textSize={38}>Little bit more: github.com/alex3165/react-mapbox-gl</Text>
    <Text textColor={mint.opacity(0.6).toString()} textSize={30} margin="20px 0px">Slides: github.com/alex3165/react-mapbox-slides</Text>
    <BottomLine/>
  </Slide>
);
