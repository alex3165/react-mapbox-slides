import React from 'react'
import styled from 'styled-components'
import { Slide, View, Text, Image } from 'extravaganza'

const Ken = styled(Image).attrs({
  src: '/static/murica-ken.jpg'
})`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin: 40px;
`

const BuildAnything = () => (
  <Slide>
    <Ken />

    <Text textSize={1}>
      “Components are the perfect way to declaratively describe and build almost anything.”
    </Text>

    <Text italic margin="40px 0">
      — Ken Wheeler
    </Text>
  </Slide>
)

export default BuildAnything
