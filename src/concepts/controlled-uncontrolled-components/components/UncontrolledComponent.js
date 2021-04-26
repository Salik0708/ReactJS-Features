import React, { Component } from "react";

// Note:
// To write an uncontrolled component, instead of writing an event handler for
// every state update, you can use a "ref" to get form values from the DOM.

// What is ref ?
// Refs provide a way to access DOM nodes or React elements created in the render method.

class UncontrolledComponent extends Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("A name was submitted: " + this.input.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default UncontrolledComponent;
