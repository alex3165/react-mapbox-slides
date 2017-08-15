import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Slide, CodeBlock, Text, Image } from 'extravaganza'

const slide = keyframes`
  from {
    right: 50px;
  }

  to {
    right: 200px;
  }
`;

const code = `
<Map>
  <Layer
    type='symbol'
    id='marker'
    layout={{
      'icon-image': 'marker-15'
    }}
  >
    <Feature
      coordinates={[ -0.481747846041145, 51.3233379650232 ]}
    />
  </Layer>
</Map>
`

const Sirocco = styled(Image).attrs({
  src: '/static/sirocco.gif'
})`
  position: absolute;
  right: 100px;
  bottom: 0;
  animation: ${slide} 3s linear infinite alternate;
`

const ReactCode = () => (
  <Slide>
    <Text textSize={1} margin={20}>
      Let thar be another way!
    </Text>

    <CodeBlock
      code={code}
      language="jsx"
    />

    <Sirocco />
  </Slide>
)

export default ReactCode
