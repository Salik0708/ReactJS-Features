import React, { Component } from "react";

import ComponentF from "./ComponentF";
import UserContext from "../context";

class ComponentE extends Component {
  // There are two limitations occurs if using context this way. which are
  // 1. First, it only works with class components
  // 2. Second, it only subscribe to a single context type
  static contextType = UserContext;

  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    );
  }
}

// ComponentE.contextType = UserContext;

export default ComponentE;
