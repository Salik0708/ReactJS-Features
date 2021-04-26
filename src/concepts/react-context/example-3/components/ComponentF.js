import React from "react";

import { UserConsumer } from "../context";

const ComponentF = () => {
  return (
    <UserConsumer>
      {(username) => {
        return <p>Hello {username}</p>;
      }}
    </UserConsumer>
  );
};

export default ComponentF;
