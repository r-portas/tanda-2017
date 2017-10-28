import React, { Component } from "react";

import User from "./User";

import longBlack from "../imgs/coffee/Long Black.png";
import cap from "../imgs/coffee/Cappucino.png";
import amer from "../imgs/coffee/Americano.png";
import espr from "../imgs/coffee/Espresso.png";
import viena from "../imgs/coffee/Viena.png";

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
      ],
      coffee: [
        {
          name: "Long Black",
          img: longBlack
        },
        {
          name: "Cappucino",
          img: cap
        },
        {
          name: "Americano",
          img: amer
        },
        {
          name: "Espresso",
          img: espr
        },
        {
          name: "Viena",
          img: viena
        },

      ]
    };

		this.renderShops = this.renderShops.bind(this);
    this.renderCoffee = this.renderCoffee.bind(this);

  }

  renderShops() {
    return this.state.shops.map((shop) => {
      return <div key={shop.name} className="Order-shop">{shop.name}</div>
    });
  }

  renderCoffee() {
    return this.state.coffee.map((coffee) => {
      return (
        <User coffeePhoto key={coffee.name} photo={coffee.img} name={coffee.name} />
      )
    });
  }

  render() {
    return (
      <div>
        <h2>Order</h2>
				<div className="Order-shop-container">
					{ this.renderShops() }
				</div>

        <h2>Coffee</h2>
				<div className="Order-shop-container">
					{ this.renderCoffee() }
				</div>

        <button className="Landing-login">Submit</button>
      </div>
    );
  }
}

export default Order;
