import React, { Component } from "react";

import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    return (
      <h1 onMouseOver={this.props.incrementCounter}>
        Hover {this.props.count} times
      </h1>
    );
  }
}

export default withCounter(HoverCounter, 10);
