import React, { Component } from 'react'
import { Slide, Text } from 'extravaganza'
import styled from 'styled-components'
import Loading from 'extravaganza/lib/client/components/loading'

const Placeholder = styled.div`
  position: relative;
  display: block;
  width: 100vw;
  height: 100vh;

  background-size: cover;
  background-position: center;
  background-image: url('/static/map-placeholder.png');
`;

const SlideWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  pointer-events: none;
`;

let Map = () => null
let Layer = () => null
let Feature = () => null
let Marker = () => null

// We need to conditionally load Mapbox GL to not break SSR
if (typeof document === 'object') {
  const ReactMapboxGl = require('react-mapbox-gl')

  Layer = ReactMapboxGl.Layer
  Feature = ReactMapboxGl.Feature
  Marker = ReactMapboxGl.Marker

  Map = ReactMapboxGl.default({
    accessToken: 'pk.eyJ1IjoicGhpbHBsIiwiYSI6ImNqMmxyNmhkcjAwMG8zMnFubGEzaHhnY3MifQ.cjjDsR6H-cXBkAGAHRHHrQ',
    refreshExpiredTiles: false
  })

  Map = styled(Map)`
    transition: opacity .8s linear;
    opacity: ${p => p.isVisible ? 1 : 0};
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    font-size: 12px;
  `
}

const route = [
  [6.184416999999939, 48.692054],
  [5.381329800000003, 49.4317156],
  [4.158060100000057, 49.3206131],
  [2.7982417000000623, 49.4568168],
  [2.2957529999999906, 49.894067],
  [3.0316268000000264, 50.23904080000001],
  [3.0871210000000247, 50.7015545],
  [1.9321996999999556, 50.9809748],
  [0.9483588000000509, 50.9992658],
  [-0.098876953125, 50.88224311113971],
  [-0.8016020999999682, 51.1363197],
  [-0.5577064999999948, 51.468409],
  [-0.1715040000000272, 51.5264327],
  [-0.10801249999997253, 51.5181479]
]

const center = [0.12181699999996454, 52.205337]
const zoom = [5.3]

class MapSlide extends Component {
  state = {
    isMapMounted: false
  }

  componentDidMount() {
    // NOTE: Wait for 500ms to wait for the end of the transition
    setTimeout(() => {
      this.setState({ isMapMounted: true })
    }, 500)
  }

  onStyleLoad = map => {
    this.setState({ isMapLoaded: true, map })
  }

  onClick = () => {
    const { map } = this.state

    this.setState({ didZoom: true })

    map.flyTo({
      center: route[route.length - 1],
      zoom: 12,
      speed: 0.8
    })
  }

  render() {
    const { isMapMounted, isMapLoaded, didZoom } = this.state
    const slide = (
      <SlideWrapper>
        <Slide justifyContent="flex-start">
          <Text textColor="secondary" textSize={2}>
            {didZoom ? 'Yarr! Ye found thee treasure! ☠️' : 'X marks the spot'}
          </Text>
        </Slide>
      </SlideWrapper>
    );

    if (!isMapMounted) {
      return <Placeholder>{slide}</Placeholder>
    }

    return (
      <Placeholder>
        <Map
          isVisible={isMapLoaded}
          style="mapbox://styles/philpl/cj6cga83q55cu2rrnjloviltz"
          onStyleLoad={this.onStyleLoad}
          center={center}
          zoom={zoom}
        >
          <Layer
            type="line"
            layout={{
              'line-cap': 'square',
              'line-join': 'miter'
            }}
            paint={{
              'line-color': '#f21818',
              'line-width': 7,
              'line-dasharray': [1.7, 1.7]
            }}
          >
            <Feature coordinates={route} />
          </Layer>

          <Marker
            onClick={this.onClick}
            coordinates={route[route.length - 1]}
            style={{ fontSize: '4em', cursor: 'pointer' }}
          >
            ❌
          </Marker>
        </Map>

        <Loading pastDelay isLoading={!isMapLoaded} />

        {slide}
      </Placeholder>
    )
  }
}

export default MapSlide
