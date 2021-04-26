import React, { Component } from "react";

class ShoppingList extends Component {
  state = {
    items: [],
    newItem: "",
  };

  handleChangeNewItem = (event) => {
    this.setState({
      newItem: event.target.value,
    });
  };

  handleClickAdd = () => {
    if (this.state.newItem !== "") {
      this.setState({
        items: [
          ...this.state.items,
          {
            id: this.state.items.length,
            description: this.state.newItem,
            completed: false,
          },
        ],
        newItem: "",
      });
    }
  };

  handleClickDone = (itemId) => () => {
    const updatedItems = [...this.state.items];
    const completedItemIndex = this.state.items.findIndex(
      (item) => item.id === itemId
    );

    updatedItems[completedItemIndex].completed = true;

    this.setState({
      items: updatedItems,
    });
  };

  render() {
    const { items } = this.state;

    const renderItems = items.map((item) => {
      return (
        <li
          key={item.id}
          style={item.completed ? { textDecoration: "line-through" } : null}
        >
          {item.description}
          <input
            type="button"
            value="Done"
            onClick={this.handleClickDone(item.id)}
          />
        </li>
      );
    });
    return (
      <div>
        <form>
          <label>
            New Shopping Item
            <input
              type="text"
              value={this.state.newItem}
              onChange={this.handleChangeNewItem}
            />
          </label>
          <input type="button" value="Add" onClick={this.handleClickAdd} />
        </form>
        <ul>{renderItems}</ul>
      </div>
    );
  }
}

export default ShoppingList;
