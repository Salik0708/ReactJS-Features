import React from "react";

import ComponentC from "./components/ComponentC";
import { UserProvider } from "./context";

const ReactContextExampleThree = () => {
  return (
    <UserProvider value="Salik">
      <ComponentC />
    </UserProvider>
  );
};

export default ReactContextExampleThree;
