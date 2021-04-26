import React, { Component } from "react";

import MyContext from "../context/MyContext";

class MyProvider extends Component {
  state = {
    name: "Salik",
    age: 25,
    cool: true,
  };
 
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growAYearOlder: () => this.setState({ age: this.state.age + 1 }),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
