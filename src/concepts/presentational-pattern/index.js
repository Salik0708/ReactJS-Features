import React, { Component } from "react";

import GreetingCard from "./components/GreetingCard";

class PresentationalPattern extends Component {
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
        {/* Presentational Component */}
        <GreetingCard name={this.state.name} />
      </div>
    );
  }
}

export default PresentationalPattern;
