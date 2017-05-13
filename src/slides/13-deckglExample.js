import React from 'react';
import { Heading, Slide, Text, Link } from 'spectacle';

const containerStyle = {
  height: 500,
  width: '100%'
}

export default () => (
  <Slide transition={["slide"]}>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      Taxi trips in New York
    </Heading>
    <iframe src="http://localhost:3030" frameBorder="0" style={containerStyle}/>
  </Slide>
);
