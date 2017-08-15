import React from 'react'
import styled from 'styled-components'
import { Slide, CodeBlock, Text } from 'extravaganza'

const code = `
const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
  .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
  .openPopup();
`

const DomCode = () => (
  <Slide>
    <Text textSize={1} margin={20}>
      But most their code is not made <br /> for React-apps and imperative
    </Text>

    <CodeBlock
      code={code}
      language="javascript"
    />
  </Slide>
)

export default DomCode
