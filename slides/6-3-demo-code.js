import React, { Component } from 'react'
import { Slide, Text, CodeBlock } from 'extravaganza'

const code = `
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  // token, options...
});

const PirateMap () => (
  <Map
    style="mapbox://styles/philpl/cj6cga83q55cu2rrnjloviltz"
    center={center}
    zoom={zoom}
  >
    <Layer
      type="line"
      layout={layoutStyle}
      paint={paintStyle}
    >
      <Feature coordinates={route} />
    </Layer>

    <Marker coordinates={route[route.length - 1]} style={markerStyle}>
      ❌
    </Marker>
  </Map>
);
`

const Code = () => (
  <Slide>
    <CodeBlock
      code={code}
      language="jsx"
      textSize={-2}
    />
  </Slide>
)

export default Code
