import React from 'react';

import intro from './slides/Introduction';
import displayMap from './slides/01-displayMap';
import mapbox from './slides/02-mapbox';
import rasterVector from './slides/03-rasterVsVectorTiles';
import vectorMap from './slides/04-vectorMap';
import vectorMapCode from './slides/05-vectorMapCode';

import './base.css';

import { Deck } from "spectacle";
import theme from './theme';
import merge from './merge';

const makeSlides = () => {
  const slides = merge(
    intro(),
    displayMap(),
    mapbox(),
    rasterVector(),
    vectorMap(),
    vectorMapCode(),
    () => <div/>
  );

  return slides;
};

class App extends React.Component {
  render() {
    return (
      <Deck transition={["slide", "fade"]} controls={false} theme={theme}>
        {
          makeSlides()
        }
      </Deck>
    );
  }
}

export default App;
