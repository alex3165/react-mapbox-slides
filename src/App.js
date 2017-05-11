import React from 'react';

import intro from './slides/00-Introduction';
import displayMap from './slides/01-displayMap';
import mapbox from './slides/02-mapbox';
import rasterVector from './slides/03-rasterVsVectorTiles';
import vectorMap from './slides/04-vectorMap';
import vectorMapCode from './slides/05-vectorMapCode';
import reactIntegration from './slides/06-reactIntegration';
import reactify from './slides/07-reactify';
import reactMapboxGl from './slides/08-reactMapboxGl';
import londonCycleExample from './slides/09-londonCycleExample';
import londonCycleCode from './slides/10-londonCycleCode';
import mapboxStudio from './slides/11-customiseMap';
import monumap from './slides/12-monumap';

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
    reactIntegration(),
    reactify(),
    reactMapboxGl(),
    londonCycleExample(),
    londonCycleCode(),
    mapboxStudio(),
    monumap()
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
