import React from 'react'
import { Slide, Text, TextFit, Image } from 'extravaganza'

const TileRendering = () => (
  <Slide>
    <Text margin="20px 0" textSize={2}>
      Tile Rendering
    </Text>

    <TextFit>
      Small JS bundle + SSR, but terrible zooming
    </TextFit>

    <br />

    <Image src="/static/tiling.png" width="100%" />

    <Text italic textSize={-1}>Source: https://blog.woosmap.com/tutorials/big-data-woosmap/</Text>
  </Slide>
)

export default TileRendering
