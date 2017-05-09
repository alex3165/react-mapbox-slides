import React from 'react';
import mapboxgl from 'mapbox-gl';

// Reactify our mapboxgl.Map instantiation

class Map extends React.Component {
  componentDidMount() {
    var map = new mapboxgl.Map({
      ...this.props,
      container: this.container
    });
  }

  render() {
    return (
      <div ref={(x) => { this.container = x; }}/>
    );
  }
}

const Component = () => (
  <Map
    style="mapbox://styles/mapbox/light-v9"
    center={[-74.0066, 40.7135]}
    zoom={15}
  />
)
