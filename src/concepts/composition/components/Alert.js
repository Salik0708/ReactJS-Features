import React from "react";

import "./Alert.css";

const Alert = (props) => {
  const { children } = props;

  return <div className="alert">{children}</div>;
};

export default Alert;
