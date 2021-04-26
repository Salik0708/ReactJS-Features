import React, { Component } from "react";

class ContainerPattern extends Component {
  state = {
    name: "",
  };

  componentDidMount() {
    // AJAX
    this.setState(() => {
      return {
        name: "William",
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Hello! {this.state.name}</h1>
      </div>
    );
  }
}

export default ContainerPattern;
