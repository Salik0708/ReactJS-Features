import React, { useState } from "react";

import Alert from "./components/Alert";
import DismissibleAlert from "./components/DismissibleAlert";

import "./style.css";

const Composition = () => {
  const [hasError, setHasError] = useState(true);

  const dismissErrorHandler = () => setHasError(false);

  return (
    <div className="composition-container">
      <Alert>Sorry, something went wrong!</Alert>
      {hasError && (
        <DismissibleAlert onDismiss={dismissErrorHandler}>
          An error occured!
        </DismissibleAlert>
      )}
    </div>
  );
};

export default Composition;
