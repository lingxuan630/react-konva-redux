import React, { Component } from "react";
import { connect } from "react-redux";
import { Circle, Group } from "../lib/react-konva";

export class CircleComponent extends Component {
  constructor() {
    super();
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDrag(e) {
    const { target } = e;
    const { x, y } = target.attrs;
    const { index } = this.props;
    this.props.dispatch({
      type: "CHANGE_POSITION",
      payload: {
        [index]: {
          x: x,
          y: y
        }
      }
    });
  }

  render() {
    const { x, y, index } = this.props;
    console.log("reRender", index);

    return (
      <Group>
        <Circle radius="50" fill="black" x={x} y={y} stroke="red" />
        <Circle
          radius="50"
          fill="transparent"
          x={x}
          y={y}
          draggable={true}
          onDragmove={this.handleDrag}
        />
      </Group>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...state.position[props.index]
  };
};

export const CircleConnected = connect(mapStateToProps, null)(CircleComponent);
// export default ;
