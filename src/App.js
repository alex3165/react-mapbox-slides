import React from 'react';
import Introduction from './slides/Introduction';
import DisplayMap from './slides/01-displayMap';
import Mapbox from './slides/02-mapbox';
import RasterVector from './slides/03-rasterVsVectorTiles';
import VectorMap from './slides/04-vectorMap';

import { Deck } from "spectacle";
import theme from './theme';

class App extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Introduction/>
        <DisplayMap/>
        <Mapbox/>
        <RasterVector/>
        <VectorMap/>
      </Deck>
    );
  }
}

export default App;
