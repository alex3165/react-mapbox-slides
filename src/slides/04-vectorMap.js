import React from 'react';
import { Slide } from 'spectacle';
import ReactMapboxGl, { Layer } from "react-mapbox-gl";

export default class RasterVector extends React.Component {
  render() {
    return (
      <Slide>
        <ReactMapboxGl
          style="mapbox://styles/mapbox/light-v9"
          accessToken="pk.eyJ1IjoiYWxleDMxNjUiLCJhIjoiY2l4b3V0Z3RpMDAxczJ4cWk2YnEzNTVzYSJ9.MFPmOyHy8DM5_CVaqPYhOg"
          containerStyle={{
            width: '100%',
            height: 500
          }}>
            <Layer
              id="3d-buildings"
              sourceId="composite"
              layerOptions={{
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 15
              }}
              paint={{
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
              }}/>
        </ReactMapboxGl>
      </Slide>
    );
  }
};
