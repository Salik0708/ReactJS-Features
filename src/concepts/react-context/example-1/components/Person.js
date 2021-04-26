import React from "react";

import MyContext from "../context/MyContext";

const Person = () => (
  <div className="person">
    <MyContext.Consumer>
      {(context) => (
        <React.Fragment>
          <p>Age: {context.state.age}</p>
          <p>Name: {context.state.name}</p>
          <button onClick={context.growAYearOlder}>🎂🍥🎂 </button>
        </React.Fragment>
      )}
    </MyContext.Consumer>
  </div>
);

export default Person;
