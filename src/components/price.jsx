import React, { Component } from "react";

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: props.price,
      currency: "$",
    };
  }

  handleCurrencyChange = (oldPrice, oldCurrency) => {
    if (oldCurrency === "$") {
      const newPrice = oldPrice * 500;
      const newCurrency = "֏";
      this.setState({ price: newPrice, currency: newCurrency });
    } else {
      const newPrice = oldPrice / 500;
      const newCurrency = "$";
      this.setState({ price: newPrice, currency: newCurrency });
    }
  };

  render() {
    const { price, currency } = this.state;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h3>
          The price is {price} {currency}
        </h3>
        <button
          onClick={() => this.handleCurrencyChange(price, currency)}
          style={{ cursor: "pointer", height: 35, marginLeft: 5 }}
        >
          Change currency
        </button>
      </div>
    );
  }
}

export default Price;
