import React from 'react'
import { Slide, Text, TextFit, Image } from 'extravaganza'

const VectorRendering = () => (
  <Slide>
    <Text margin="20px 0" textSize={2}>
      Vector Rendering
    </Text>

    <TextFit>
      Zoom interpolation, customisability, and quicker load times
    </TextFit>

    <br />

    <Image src="/static/vector-load.png" width="80%" margin="40px 0" />

    <Text italic textSize={-1}>Source: https://blog.woosmap.com/tutorials/big-data-woosmap/</Text>
  </Slide>
)

export default VectorRendering
