import React, { Component } from "react";

class TodoList extends Component {
  state = {
    tasks: [],
    newTask: "",
  };

  handleChangeNewTask = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  handleClickAdd = () => {
    if (this.state.newTask !== "") {
      this.setState({
        tasks: [
          ...this.state.tasks,
          {
            id: this.state.tasks.length,
            description: this.state.newTask,
            completed: false,
          },
        ],
        newTask: "",
      });
    }
  };

  handleClickDone = (taskId) => () => {
    const updatedTasks = [...this.state.tasks];
    const competedTaskIndex = this.state.tasks.findIndex(
      (task) => task.id === taskId
    );

    updatedTasks[competedTaskIndex].completed = true;

    this.setState({
      tasks: updatedTasks,
    });
  };

  render() {
    const { tasks } = this.state;

    const renderTasks = tasks.map((task) => {
      return (
        <li
          key={task.id}
          style={task.completed ? { textDecoration: "line-through" } : null}
        >
          {task.description}
          <input
            type="button"
            value="Done"
            onClick={this.handleClickDone(task.id)}
          />
        </li>
      );
    });

    return (
      <div>
        <form>
          <label>
            New Task
            <input
              type="text"
              value={this.state.newTask}
              onChange={this.handleChangeNewTask}
            />
          </label>
          <input type="button" value="Add" onClick={this.handleClickAdd} />
        </form>
        <ul>{renderTasks}</ul>
      </div>
    );
  }
}

export default TodoList;
