import React from "react";

import Alert from "./Alert";

import "./DismissibleAlert.css";

const DismissibleAlert = (props) => {
  const { children, onDismiss } = props;

  return (
    <Alert>
      <button className="dlt-btn" onClick={onDismiss}>
        X
      </button>
      {children}
    </Alert>
  );
};

export default DismissibleAlert;
