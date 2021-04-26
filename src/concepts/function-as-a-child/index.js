import React from "react";

class FunctionAsChild extends React.Component {
  render() {
    // See how we're calling the child as a function
    //                        ↓
    return this.props.children();
  }
}

export default FunctionAsChild;
