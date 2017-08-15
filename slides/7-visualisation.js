import React, { Component } from 'react'
import styled from 'styled-components'
import { Slide, TextFit } from 'extravaganza'
import DeckGlTrips from '../vendor/deck-gl-trips/app'

const Background = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: ${p => p.theme.colors.secondaryBackground};
`

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  .mapboxgl-canvas {
    left: 0;
  }
`

class Visualisation extends Component {
  state = { ssr: true }

  componentDidMount() {
    this.setState({ ssr: false })
  }

  render() {
    return (
      <Background>
        {!this.state.ssr && (
          <Wrapper>
            <DeckGlTrips />
          </Wrapper>
        )}

        <Slide textColor="secondary">
          <TextFit>
            Interactive 3D Visualisations with Deck.GL
          </TextFit>
        </Slide>
      </Background>
    )
  }
}

export default Visualisation
