import React from 'react'
import styled from 'styled-components'
import { Slide, List, Text, Image } from 'extravaganza'

const StrangeThings = () => (
  <Slide
    background="primary"
    textColor="secondary"
  >
    <Image src="/static/stranger-things.png" width={700} margin={70} />

    <List>
      <li>React Native</li>
      <li>Spectacle</li>
      <li>Victory</li>
      <li>react-game-kit</li>
      <li>react-music</li>
      <li>react-hardware</li>
      <li>react-blessed</li>
      <li>...</li>
    </List>
  </Slide>
)

export default StrangeThings
