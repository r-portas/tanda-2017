import React, { Component } from "react";
import "./Connect.css";

class Connect extends Component {

	constructor(props) {
		super(props);

		this.state = {
			"7am-8am": false,
			"8am-9am": false,
			"9am-10am": false,
			"10am-11am": false,
			"11am-12pm": false,
			"12pm-1pm": false,
			"1pm-2pm": false,
			"2pm-3pm": false,
			"4pm-5pm": false,
			"5pm-6pm": false
		}

		this.renderHeaders = this.renderHeaders.bind(this);
		this.renderCheckboxes = this.renderCheckboxes.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const name = event.target.name;
		const value = event.target.checked;

		this.setState({ [name]:  value });
	}

	renderHeaders() {
		return Object.keys(this.state).map((time) => {
			return <th key={time}>{time}</th>
		});
	}

	renderCheckboxes() {
		return Object.keys(this.state).map((time) => {
          return <td key={time}><label><input type="checkbox" name={time} checked={this.state[time]} onChange={this.handleChange}/></label></td>
		});
	}

  render() {
    return (
      <div>
        <h2>Connect with your co-workers!</h2>

        <p style={{width: "80%", margin: "auto"}}>
          Brew-tiful allows you to connect with your co-workers through
          the Tanda system, allowing you to form groups with peoples who do the same shifts as you or who work in the same department.
        </p>

        <table className="paleOrangeRows">
          <thead>
          <tr>
					  <th>&nbsp;</th>
						{ this.renderHeaders() }
          </tr>
          </thead>
        
          <tbody>
          <tr>
          <td>Please select your avaiablity</td>
					{ this.renderCheckboxes() }
          </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default Connect;
