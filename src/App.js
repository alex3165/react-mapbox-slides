import React from 'react';

import intro from './slides/00-Introduction';
import displayMap from './slides/01-displayMap';
import mapbox from './slides/02-mapbox';
import rasterVector from './slides/03-rasterVsVectorTiles';
import rasterMap from './slides/04-rasterMap';
import vectorMap from './slides/04-vectorMap';
import vectorMapCode from './slides/05-vectorMapCode';
import reactIntegration from './slides/06-reactIntegration';
import reactify from './slides/07-reactify';
import reactMapboxGl from './slides/08-reactMapboxGl';
import londonCycleExample from './slides/09-londonCycleExample';
import londonCycleCode from './slides/10-londonCycleCode';
import mapboxStudio from './slides/11-customiseMap';
import monumap from './slides/12-monumap';
import monumapCode from './slides/12-monumapCode';
import datavisualisation from './slides/13-datavisualisation';
import deckglExample from './slides/13-deckglExample';
import conclusion from './slides/14-conclusion';
import thanks from './slides/15-thanks';

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
    rasterMap(),
    vectorMap(),
    vectorMapCode(),
    reactIntegration(),
    reactify(),
    reactMapboxGl(),
    londonCycleExample(),
    londonCycleCode(),
    mapboxStudio(),
    monumap(),
    monumapCode(),
    datavisualisation(),
    deckglExample(),
    conclusion(),
    thanks()
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
