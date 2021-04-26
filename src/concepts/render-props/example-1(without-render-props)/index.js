import React from "react";

import TodoList from "./TodoList";
import ShoppingList from "./ShoppingList";

const ExampleOneWithoutRenderProps = () => (
  <React.Fragment>
    <TodoList />
    <ShoppingList />
  </React.Fragment>
);

export default ExampleOneWithoutRenderProps;
