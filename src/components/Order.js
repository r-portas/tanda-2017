import React, { Component } from "react";

import "./Order.css";

class Order extends Component {

  constructor(props) {
    super(props);

    this.state = {
      shops: [
				{
					name: "Wordies"
				},
				{
					name: "Merlos"
				},
				{
					name: "Lakeside"
				}
			]
    };

		this.renderShops = this.renderShops.bind(this);

  }

  renderShops() {
    return this.state.shops.map((shop) => {
      return <div className="Order-shop">{shop.name}</div>
    });
  }

  render() {
    return (
      <div>
        <h2>Order</h2>
				<div className="Order-shop-container">
					{ this.renderShops() }
				</div>

      </div>
    );
  }
}

export default Order;
