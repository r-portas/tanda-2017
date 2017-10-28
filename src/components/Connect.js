import React, { Component } from "react";
import { withRouter } from 'react-router';
import "./Connect.css";

class Connect extends Component {

	constructor(props) {
		super(props);

		this.state = {
			"7am": false,
			"8am": false,
			"9am": false,
			"10am": false,
			"11am": false,
			"12pm": false,
			"1pm": false,
			"2pm": false,
			"3pm": false,
			"4pm": false,
			"5pm": false
		}

		this.renderHeaders = this.renderHeaders.bind(this);
		this.renderCheckboxes = this.renderCheckboxes.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.submit = this.submit.bind(this);
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

	submit() {
		this.props.history.push("/whoisfree")
	}

  render() {
    return (
      <div>
        <h2>Connect with your co-workers!</h2>

        <p style={{width: "80%", margin: "auto"}}>
          Select what times you are available today to get coffee, and Brew-tiful will notify your friends.
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
        <button className="Landing-login" onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default withRouter(Connect);
