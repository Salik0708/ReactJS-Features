import React from "react";
import Switch from "@material-ui/core/Switch";

const SwitchComponent = ({ on, handleChange }) => (
  <div>
    <Switch checked={on} onChange={handleChange} />
  </div>
);

export default SwitchComponent;
