import React from 'react'
import styled from 'styled-components'
import { Slide, TextFit, Image } from 'extravaganza'

const ConfusedParrot = styled(Image).attrs({
  src: '/static/confusedparrot.gif'
})`
  position: absolute;
  right: 100px;
  bottom: 0;
  height: 120px;
  image-rendering: pixelated;
`

const Why = () => (
  <Slide>
    <Image src="/static/mapbox.png" width={500} />

    <TextFit margin="80px 0">
      What are the benefits of vector rendering?
    </TextFit>

    <ConfusedParrot />
  </Slide>
)

export default Why
