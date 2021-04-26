import React from "react";

import AdminInfo from "./components/AdminInfo";
import AuthInfo from "./components/AuthInfo";

const ExampleOne = () => (
  <React.Fragment>
    <AdminInfo isAdmin={true} info="There are the details" />
    <AuthInfo isAuthenticated={true} info="There are the details" />
  </React.Fragment>
);

export default ExampleOne;
