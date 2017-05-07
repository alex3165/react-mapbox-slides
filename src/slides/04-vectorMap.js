import React from 'react';
import { Slide, Heading, List, ListItem } from 'spectacle';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

export default class RasterVector extends React.Component {
  render() {
    return (
      <Slide>
        <ReactMapboxGl
          style="mapbox://styles/alex3165/cixouinss00332smv840072s6"
          accessToken="pk.eyJ1IjoiYWxleDMxNjUiLCJhIjoiY2l4b3V1YjgxMDAxZzMycG94ajRydGJ2ciJ9.ENIGGEe_9pIKS3hZFY9teg"
          containerStyle={{
            height: 300,
            width: '100%'
          }}>
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}>
              <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
            </Layer>
        </ReactMapboxGl>
      </Slide>
    );
  }
};
