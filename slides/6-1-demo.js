import React from 'react'
import styled from 'styled-components'
import { Slide, TextFit, Image } from 'extravaganza'

const DealWithItParrot = styled(Image).attrs({
  src: '/static/dealwithitparrot.gif'
})`
  position: absolute;
  right: 100px;
  bottom: 0;
  height: 250px;
`

const Demo = () => (
  <Slide>
    <TextFit>
      Are ye mateys ready for a...
    </TextFit>

    <TextFit>
      DEMO?!
    </TextFit>

    <DealWithItParrot />
  </Slide>
)

export default Demo
