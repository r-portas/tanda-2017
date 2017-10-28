import React, { Component } from "react";
import "./Connect.css";

class Connect extends Component {
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
          <th>7am-8am</th>
          <th>8am-9am</th>
          <th>9am-10am</th>
          <th>10am-11am</th>
          <th>11am-12pm</th>
          <th>12pm-1pm</th>
          <th>1pm-2pm</th>
          <th>2pm-3pm</th>
          <th>3pm-4pm</th>
          <th>4pm-5pm</th>
          <th>5pm-6pm</th>
          </tr>
          </thead>
        
          <tbody>
          <tr>
          <td>Please select your avaiablity</td>
          <td><label><input type="checkbox" /></label></td>
          <td><label><input type="checkbox" /></label></td>
          <td><label><input type="checkbox" /></label></td>
          <td><label><input type="checkbox" /></label></td>
          <td><label><input type="checkbox" /></label></td>
          <td><label><input type="checkbox" /></label></td>
          <td><label><input type="checkbox" /></label></td>
          <td><label><input type="checkbox" /></label></td>
          <td><label><input type="checkbox" /></label></td>
          <td><label><input type="checkbox" /></label></td>
          <td><label><input type="checkbox" /></label></td>
          </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default Connect;
