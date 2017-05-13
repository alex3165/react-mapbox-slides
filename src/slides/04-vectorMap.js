import React from 'react';
import { Slide, Heading } from 'spectacle';
import ReactMapboxGl, { Layer } from "react-mapbox-gl";

const threeDLayerOpts = {
  'source-layer': 'building',
  'filter': ['==', 'extrude', 'true'],
  'type': 'fill-extrusion',
  'minzoom': 14
};

const paintLayer = {
  'fill-extrusion-color': '#aaa',
  'fill-extrusion-height': {
      'type': 'identity',
      'property': 'height'
  },
  'fill-extrusion-base': {
      'type': 'identity',
      'property': 'min_height'
  },
  'fill-extrusion-opacity': .6
};

const mapContainerStyle = {
  width: '100%',
  height: 500
};

const mapCenter = [51.5107452, -0.1427025].reverse();
const zoom = [12];

export default () => (
  <Slide transition={["zoom"]}>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      WebGl map (vector tiles)
    </Heading>
    <ReactMapboxGl
      style="mapbox://styles/mapbox/light-v9"
      accessToken="pk.eyJ1IjoiYWxleDMxNjUiLCJhIjoiY2l4b3V0Z3RpMDAxczJ4cWk2YnEzNTVzYSJ9.MFPmOyHy8DM5_CVaqPYhOg"
      center={mapCenter}
      zoom={zoom}
      containerStyle={mapContainerStyle}>
        <Layer
          id="3d-buildings"
          sourceId="composite"
          layerOptions={threeDLayerOpts}
          paint={paintLayer}/>
    </ReactMapboxGl>
  </Slide>
);
