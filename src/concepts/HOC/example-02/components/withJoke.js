import React, { Component } from "react";

const withJoke = (WrappedComponent) => {
  class HOC extends Component {
    state = {
      joke: "",
    };

    onRequest = () => {
      fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((joke) => {
          this.setState({ joke: joke.value });
        })
        .catch((err) => err);
    };

    render() {
      return (
        <div>
          <WrappedComponent
            joke={this.state.joke}
            onRequest={this.onRequest}
            {...this.props}
          />
        </div>
      );
    }
  }

  return HOC;
};

export default withJoke;
