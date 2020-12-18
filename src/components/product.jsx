import React, { Component } from "react";
import Price from "./price";
import Name from "./name";
import Description from "./description";

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Name name={this.props.name} />
        <Description description={this.props.description} />
        <Price price={this.props.price} />
      </div>
    );
  }
}

export default Product;
