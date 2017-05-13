import React from 'react';
import { Heading, Slide, List, ListItem, Text } from 'spectacle';
import BottomLine from '../BottomLine';
import { white } from '../colors';

const containerStyle = {
  height: 500,
  width: '100%'
};

export default () => (
  <Slide transition={["slide"]}>
    <Text textColor={white}>Little bit more: github.com/alex3165/react-mapbox-gl</Text>
    <BottomLine/>
  </Slide>
);
