import React from 'react';
import { Slide, Heading, Link } from 'spectacle';
import Twitter from '../twitter';
import Github from '../github';
import styled from 'styled-components';

const Line = styled.div`
  display: flex;
  marginTop: 100px;
  justify-content: center;
`;

const Item = styled.div`
  padding: 10px 20px;
`;

export default () => (
  <Slide transition={["zoom"]}>
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      Build webgl map with Mapbox and React
    </Heading>
    <Line>
      <Item>
        <Twitter/>
        <Link margin="0px 10px" href="https://twitter.com/alex_picprod" target="_blank">
          @alex_picprod
        </Link>
      </Item>
      <Item>
        <Github/>
        <Link margin="0px 10px" href="https://github.com/alex3165" target="_blank">
          alex3165
        </Link>
      </Item>
    </Line>
  </Slide>
)
