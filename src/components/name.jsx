import React, { Component } from "react";

class Name extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>The name is {this.props.name}</h3>
      </div>
    );
  }
}

export default Name;
