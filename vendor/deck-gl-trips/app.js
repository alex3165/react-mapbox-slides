/* global window,document */
import React, {Component} from 'react';
import MapGL from 'react-map-gl';
import DeckGLOverlay from './deckgl-overlay.js';

import trips from './trips.json';
import buildings from './buildings.json';

// Set your mapbox token here
const MAPBOX_TOKEN = 'pk.eyJ1IjoicGhpbHBsIiwiYSI6ImNqMmxyNmhkcjAwMG8zMnFubGEzaHhnY3MifQ.cjjDsR6H-cXBkAGAHRHHrQ'; // eslint-disable-line

class Root extends Component {
  state = {
    buildings,
    trips,
    viewport: {
      ...DeckGLOverlay.defaultViewport,
      width: 500,
      height: 500
    },
    time: 100
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
    this._animate();
  }

  componentWillUnmount() {
    if (this._animationFrame) {
      window.cancelAnimationFrame(this._animationFrame);
    }
  }

  _animate = () => {
    const timestamp = Date.now();
    const loopLength = 1800;
    const loopTime = 60000;

    this.setState({
      time: ((timestamp % loopTime) / loopTime) * loopLength
    });

    this._animationFrame = window.requestAnimationFrame(this._animate);
  }

  _resize = () => {
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    this.setState(state => ({
      viewport: {...state.viewport, ...viewport}
    }));
  }

  render() {
    const {viewport, buildings, trips, time} = this.state;

    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <DeckGLOverlay
          viewport={viewport}
          buildings={buildings}
          trips={trips}
          trailLength={180}
          time={time}
          />
      </MapGL>
    );
  }
}

export default Root;
