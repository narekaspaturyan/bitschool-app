import React, { Component } from "react";

class Price extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>The price is {this.props.price}$</h3>
      </div>
    );
  }
}

export default Price;
