import React from 'react';
import { Heading, Slide, Text, Link } from 'spectacle';

const containerStyle = {
  height: 500,
  width: '100%'
}

export default () => (
  <Slide transition={["slide"]}>
    <iframe src="http://localhost:3030" frameBorder="0" style={containerStyle}/>
  </Slide>
);
