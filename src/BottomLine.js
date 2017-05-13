import React from 'react';
import Twitter from './twitter';
import Github from './github';
import styled from 'styled-components';
import { Link } from 'spectacle';
import { mint } from './colors';

const Line = styled.div`
  display: flex;
  marginTop: 100px;
  justify-content: center;
`;

const Item = styled.div`
  padding: 10px 20px;
`;

const color = mint;

const BottomLine = () => (
  <Line>
    <Item>
      <Twitter color={color}/>
      <Link textColor={color} margin="0px 10px" href="https://twitter.com/alex_picprod" target="_blank">
        @alex_picprod
      </Link>
    </Item>
    <Item>
      <Github color={color}/>
      <Link textColor={color} margin="0px 10px" href="https://github.com/alex3165" target="_blank">
        alex3165
      </Link>
    </Item>
  </Line>
);

export default BottomLine;
