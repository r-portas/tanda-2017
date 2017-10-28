import React, { Component } from "react";
import "./User.css";

class User extends Component {
  render() {
    return (
      <div>
        <p>Select your avaiablity!</p>
        <table className="paleBlueRows">
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

export default User;
