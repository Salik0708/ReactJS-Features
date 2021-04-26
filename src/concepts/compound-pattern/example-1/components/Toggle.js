import React, { Component } from "react";
import PropTypes from "prop-types";

import SwitchComponent from "./SwitchComponent";

const ToggleOn = ({ on, children }) => {
  return on ? children : null;
};

const ToggleOff = ({ on, children }) => {
  return on ? null : children;
};

const ToggleButton = ({ on, toggle, ...props }) => {
  return <SwitchComponent on={on} handleChange={toggle} {...props} />;
};

class Toggle extends Component {
  state = {
    on: false,
  };

  // static On = ToggleOn;
  // static Off = ToggleOff;
  // static Button = ToggleButton;

  // static displayName = "Salik";
  // static propTypes = { bar: PropTypes.string };
  // static defaultProps = { bar: "Bar" };

  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );
  };

  render() {
    // console.log(Toggle.displayName);

    // 1. React.Children.map:
    // Invokes a function on every immediate child contained within children with this set to thisArg. If children is an array it will be traversed and the function will be called for each child in the array. If children is null or undefined, this method will return null or undefined rather than an array.

    // 2. React.Children.forEach:
    // Like React.Children.map() but does not return an array.

    // 3. React.Children.count:
    // Returns the total number of components in children
    // Example:
    // console.log(React.Children.count(this.props.children));

    // 4. React.cloneElement:
    // Clone and return a new React element. The resulting element will have the original element’s props with the new props merged.

    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle,
      });
    });

    return <div>{children}</div>;
  }
}

export default Toggle;

Toggle.On = ToggleOn;
Toggle.Off = ToggleOff;
Toggle.Button = ToggleButton;

Toggle.defaultProps = {
  bar: "Bar",
};

Toggle.propTypes = {
  bar: PropTypes.string,
};

Toggle.displayName = "Salik 07";
