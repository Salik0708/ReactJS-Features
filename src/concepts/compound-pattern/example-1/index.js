import React from "react";

import Toggle from "./components/Toggle";

const CompoundPatternExampleOne = () => (
  <Toggle onToggle={(on) => console.log("toggle", on)}>
    <Toggle.On>The button is on</Toggle.On>
    <Toggle.Button />
    <Toggle.Off>The button is off</Toggle.Off>
  </Toggle>
);

export default CompoundPatternExampleOne;
