import React, { Component } from "react";

const withCounter = (WrappedComponent, incrementBy) => {
  class HOC extends Component {
    state = {
      count: 0,
    };

    incrementCounter = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementBy };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCounter={this.incrementCounter}
          {...this.props}
        />
      );
    }
  }

  return HOC;
};

export default withCounter;
