import React from 'react'
import styled from 'styled-components'
import { Slide, CodeBlock, Text } from 'extravaganza'

const code = `
const map = new mapboxgl.Map({ /* ... */ });

map.on('load', () => {
  map.addLayer({
    'id': '3d-buildings',
    'source': 'composite',
    'source-layer': 'building',
    'paint': {
      'fill-extrusion-height': {
        'type': 'identity',
        'property': 'height'
      },
      // ...
    }
  });
});
`

const DomCode = () => (
  <Slide>
    <Text textSize={1} margin={20}>
      Arrr! Why be ye write this?
    </Text>

    <CodeBlock
      code={code}
      language="javascript"
    />
  </Slide>
)

export default DomCode
