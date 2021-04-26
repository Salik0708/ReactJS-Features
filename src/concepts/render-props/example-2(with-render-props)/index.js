import React from "react";

import ListManipulator from "./ListManipulator";

const ExampleTwoWithRenderProps = () => {
  const todoList = ({ items, newItem, change, add, done }) => {
    return (
      <div className="todo-list-container">
        <form>
          <label>
            New Todo Item
            <input type="text" value={newItem} onChange={change} />
          </label>
          <input type="button" value="Add" onClick={add} />
        </form>
        <ul>{renderList(items, done)}</ul>
      </div>
    );
  };

  const shoppingList = ({ items, newItem, change, add, done }) => {
    return (
      <div className="shopping-list-container">
        <form>
          <label>
            New Shopping Item
            <input type="text" value={newItem} onChange={change} />
          </label>
          <input type="button" value="Add" onClick={add} />
        </form>
        <ul>{renderList(items, done)}</ul>
      </div>
    );
  };

  const renderList = (items, done) => {
    return items.map((item) => {
      return (
        <li
          key={item.id}
          style={item.completed ? { textDecoration: "line-through" } : null}
        >
          {item.description}
          <input type="button" value="Done" onClick={done(item.id)} />
        </li>
      );
    });
  };

  return (
    <React.Fragment>
      {/* First Method */}
      <div>
        <h1>Render Props pattern</h1>
        <ListManipulator render={todoList} />
        <ListManipulator render={shoppingList} />
      </div>

      {/* Second Method */}
      {/* <div>
        <h1>Render Props pattern</h1>
        <ListManipulator>{todoList}</ListManipulator>
        <ListManipulator>{shoppingList}</ListManipulator>
      </div> */}
    </React.Fragment>
  );
};

export default ExampleTwoWithRenderProps;
