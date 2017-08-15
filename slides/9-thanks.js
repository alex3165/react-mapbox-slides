import React from 'react'
import styled from 'styled-components'
import { Slide, View, Image, Text, TextFit } from 'extravaganza'

const Dash = styled.div`
  width: 100%;
  height: 6px;
  margin: 30px 10px;

  background-image: url('/static/dot-pattern.png');
  background-size: 16px 6px;
  background-repeat: repeat-x;
`

const Thanks = () => (
  <Slide
    background="secondaryBackground"
    textColor="secondary"
    alignItems="flex-start"
  >
    <TextFit>
      Thank ye for listenin'!
    </TextFit>

    <Dash />
  </Slide>
)

export default Thanks
