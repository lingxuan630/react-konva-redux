import React, { Component } from "react";
import { render } from "react-dom";

import { Stage, Layer, Text } from "./lib/react-konva";
import { Provider } from "react-redux";
import { isEmpty } from "lodash";
import store from "./store";

import { CircleConnected as CircleComponent } from "./components/circle";

class App extends Component {
  render() {
    let circles = [];
    const wWidth = window.innerWidth;
    const wHeight = window.innerHeight;
    const layerNodeLimit = 80;
    const groups = [];

    for (let i = 0; i < 10; i++) {
      const eleX = Math.round(wWidth * Math.random());
      const eleY = Math.round(wHeight * Math.random());
      circles.push(<CircleComponent x={eleX} y={eleY} index={i} key={i} />);
      if (circles.length === layerNodeLimit) {
        groups.push(circles);
        circles = [];
      }
    }

    if (isEmpty(groups)) {
      groups.push(circles);
    }

    const layers = groups.map((item, index) => {
      return <Layer key={index}>{item}</Layer>;
    });

    return (
      <Provider store={store}>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          {layers}
        </Stage>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
