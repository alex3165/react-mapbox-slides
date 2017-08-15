import React from 'react'
import { Slide, Text, TextFit, Image } from 'extravaganza'

const Monumap = () => (
  <Slide>
    <Text margin="20px 0" textSize={1}>
      Monumap.org
    </Text>

    <iframe
      src="https://monumap.org/"
      frameBorder="0"
      style={{
        width: '100%',
        height: '800px'
      }}
    />
  </Slide>
)

export default Monumap
