import React from 'react'
import styled from 'styled-components'
import { Slide, Text, Image } from 'extravaganza'

const ReactMapboxGl = () => (
  <Slide>
    <Image
      src="/static/react-mapbox-gl-logo.svg"
      width={200}
      height={200}
    />

    <Text margin="40px 0" textSize={1}>
      React Mapbox GL
    </Text>

    <Text textSize={-1}>
      https://alex3165.github.io/react-mapbox-gl/
    </Text>
  </Slide>
)

export default ReactMapboxGl
