import React from "react";

import Composition from "./concepts/composition";
import ReactContext from "./concepts/react-context";
import CompoundPattern from "./concepts/compound-pattern";
import RenderProps from "./concepts/render-props";
import HOCPattern from "./concepts/HOC";
import ControlledVSUncontrolledComponents from "./concepts/controlled-uncontrolled-components";
import ContainerPattern from "./concepts/container-pattern";
import PresentationalPattern from "./concepts/presentational-pattern";
import FunctionAsChild from "./concepts/function-as-a-child";
import ReactChildrenMap from "./concepts/React.Children.map";
import ReactChildrenForEach from "./concepts/React.Children.forEach";

const App = () => {
  return (
    <React.Fragment>
      {/* <Composition /> */}
      {/* <ReactContext /> */}
      {/* <CompoundPattern /> */}
      {/* <RenderProps /> */}
      {/* <HOCPattern /> */}
      <ControlledVSUncontrolledComponents />
      {/* <ContainerPattern /> */}
      {/* <PresentationalPattern /> */}

      {/* React.Children.map => First Method*/}
      {/* <ReactChildrenMap>
        <h1>First</h1>
        <h1>Two</h1>
        <h1>Three</h1>
      </ReactChildrenMap> */}
      {/* React.Children.map => Second Method */}
      {/* <ReactChildrenMap>
        <h1>First</h1>
        {() => <h1>Two</h1>}
        <h1>Three</h1>
      </ReactChildrenMap> */}

      {/* React.Children.forEach => First Method */}
      {/* <ReactChildrenForEach>
        <h1>First</h1>
        <h1>Two</h1>
        <h1>Three</h1>
      </ReactChildrenForEach> */}
      {/* React.Children.forEach  => Second Method*/}
      {/* <ReactChildrenForEach>
        <h1>First</h1>
        {() => <h1>Two</h1>}
        <h1>Three</h1>
      </ReactChildrenForEach> */}

      {/* Function as a Child */}
      {/* <FunctionAsChild>{() => <h1>Hello World!!</h1>}</FunctionAsChild> */}
      {/* If we call "FunctionAsChild" component like this an error occured => "this.props.children" is not a function because inside this component we call "this.props.children()" not just render children like this "this.props.children"*/}
      {/* <FunctionAsChild>
        <h1>Hello World!!</h1>
      </FunctionAsChild> */}
    </React.Fragment>
  );
};

export default App;
