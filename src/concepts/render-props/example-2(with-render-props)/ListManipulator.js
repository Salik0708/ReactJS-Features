import React, { Component } from "react";

class ListManipulator extends Component {
  state = {
    items: [],
    newItem: "",
  };

  handleChangeNewItem = (event) => {
    this.setState({ newItem: event.target.value });
  };

  handleClickAdd = () => {
    if (this.state.newItem !== "") {
      this.setState({
        items: [
          ...this.state.items,
          {
            id: Math.random().toString(36).slice(2, 15),
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
    const idx = this.state.items.findIndex((item) => item.id === itemId);

    updatedItems[idx].completed = true;

    this.setState({ items: updatedItems });
  };

  // First Method
  render() {
    const { render } = this.props;

    return render({
      ...this.state,
      change: this.handleChangeNewItem,
      add: this.handleClickAdd,
      done: this.handleClickDone,
    });
  }

  // Second Method
  // render() {
  //   const { children } = this.props;

  //   return children({
  //     ...this.state,
  //     change: this.handleChangeNewItem,
  //     add: this.handleClickAdd,
  //     done: this.handleClickDone,
  //   });
  // }
}

export default ListManipulator;
