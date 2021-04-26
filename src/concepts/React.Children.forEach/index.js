import React from "react";

class ReactChildrenForEach extends React.Component {
  render() {
    const children = this.props.children;
    const list = [];

    return (
      <React.Fragment>
        {React.Children.forEach(children, (child, i) => {
          // console.log("children", child, i);
          // Ignore the first child also function as a child "{() => <h1>Two</h1>}"
          if (i < 1) return;

          list.push(<li key={i}>{child}</li>);
        })}

        <ul>{list}</ul>
      </React.Fragment>
    );
  }
}

export default ReactChildrenForEach;
