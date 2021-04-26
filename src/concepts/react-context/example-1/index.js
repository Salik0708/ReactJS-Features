import React from "react";

import MyProvider from "./provider/MyProvider";
import Family from "./components/Family";

const ReactContextExampleOne = () => (
  <MyProvider>
    <Family />
  </MyProvider>
);

export default ReactContextExampleOne;
