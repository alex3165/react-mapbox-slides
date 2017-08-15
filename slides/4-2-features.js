import React from 'react'
import styled from 'styled-components'
import { Slide, Text, Image } from 'extravaganza'

const Features = () => (
  <Slide>
    <Text margin="80px 0" textSize={2}>
      ✨ Features ✨
    </Text>

    <Text margin="40px 0">
      Projected Components: Popup, Marker, Cluster
    </Text>

    <Text margin="40px 0">
      Interface Components: Layer, Source, Feature
    </Text>

    <Text bold margin="40px 0">
      Vector rendering thanks to Mapbox GL!
    </Text>
  </Slide>
)

export default Features
