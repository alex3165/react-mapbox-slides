import React from 'react';
import { Slide } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

export default class RasterVector extends React.Component {
  render() {
    return (
      <CodeSlide
        transition={[]}
        lang="js"
        code={require("./05-code.example")}
        ranges={[
          { loc: [0, 1], title: "The Beginning" }
        ]}/>
    );
  }
};
