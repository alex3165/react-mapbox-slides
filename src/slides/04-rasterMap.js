import React from 'react';
import { Slide, Heading } from 'spectacle';
import L from 'mapbox.js';
import 'mapbox.js/theme/style.css';

class Mapbox extends React.Component {
  componentDidMount() {
    L.mapbox.accessToken = 'pk.eyJ1IjoiYWxleDMxNjUiLCJhIjoiY2l4b3V0Z3RpMDAxczJ4cWk2YnEzNTVzYSJ9.MFPmOyHy8DM5_CVaqPYhOg';
    L.mapbox.map(this.container, 'mapbox.streets').setView([51.5107452, -0.1427025], 14);;
  }

  render() {
    return (
      <div
        ref={(x) => { this.container = x; }}
        style={{
          width: '100%',
          height: 500
        }}
      />
    );
  }
}

// TODO: using mapbox.js
export default () => (
  <Slide transition={["zoom"]}>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      DOM map (raster tiles)
    </Heading>
    <Mapbox/>
  </Slide>
);
