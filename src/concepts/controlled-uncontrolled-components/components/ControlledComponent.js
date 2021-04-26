import React, { Component } from "react";

// Controlled Component:
// In a controlled component, the form data is handled by the state within the component.
// The state within the component serves as “the single source of truth” for the input
// elements that are rendered by the component.

class ControlledComponent extends Component {
  state = {
    message: "",
  };

  updateMessage = (newText) => {
    this.setState({ message: newText });
  };

  render() {
    return (
      <div className="container">
        <input
          type="text"
          placeholder="Your message here.."
          value={this.state.message}
          onChange={(e) => this.updateMessage(e.target.value)}
        />
        <p>The message is: {this.state.message}</p>
      </div>
    );
  }
}

export default ControlledComponent;

//Note:
// If you look at lines 24 and 25 of the code, you can see that:
// 1. The textbox has a value attribute bound to the message property in the state.
// 2. We have an onChange event handler declared.

// These 2 points tell you that this is a controlled component.
