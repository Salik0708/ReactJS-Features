import React from "react";

class ReactChildrenMap extends React.Component {
  render() {
    const children = this.props.children;

    return (
      // First Method
      <div>
        {React.Children.map(children, (child, i) => {
          // console.log("children", child, i);
          // Ignore the first child and also function as a child "{() => <h1>Two</h1>}"
          if (i < 1) return;

          return child;
        })}
      </div>

      // Second Method
      // Note: we could’ve also used this.props.children.map. But what would’ve happened if somebody passed a function as a child? this.props.children would’ve been a function instead of an array, and we would’ve had an error!
      // Error: Uncaught TypeError: this.props.children.map is not a function

      // <div>
      //   {this.props.children.map((child, i) => {
      //     console.log("children", child, i);
      //     // Ignore the first child
      //     if (i < 1) return;
      //     return child;
      //   })}
      // </div>
    );
  }
}

export default ReactChildrenMap;
