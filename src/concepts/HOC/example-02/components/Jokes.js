import React, { Component } from "react";

import withJoke from "./withJoke";

class Jokes extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.joke}</h4>
        <button onClick={this.props.onRequest}>Click to see a new joke</button>
      </div>
    );
  }
}

export default withJoke(Jokes);
