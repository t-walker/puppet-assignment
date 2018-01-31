import React, { Component } from 'react';

class Table extends Component {

  render() {
    return (
      <table className="dataTable" cellspacing="0">
        <thead>
          <tr>
            <th width="10%">First Name</th>
            <th width="10%">Last Name</th>
            <th width="10%">Country</th>
            <th width="30%">Address</th>
            <th width="10%">City</th>
            <th width="10%">State</th>
            <th width="10%">Zip</th>
            <th width="10%">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Zachary</td>
            <td>Borgetti</td>
            <td>USA</td>
            <td>2234 3rd AVE STE 3</td>
            <td>Seattle</td>
            <td>WA</td>
            <td>98101</td>
            <td>206-778-5741</td>
          </tr>
          <tr>
            <td>Zachary</td>
            <td>Borgetti</td>
            <td>USA</td>
            <td>2234 3rd AVE STE 3</td>
            <td>Seattle</td>
            <td>WA</td>
            <td>98101</td>
            <td>206-778-5741</td>
          </tr>
          <tr>
            <td>Zachary</td>
            <td>Borgetti</td>
            <td>USA</td>
            <td>2234 3rd AVE STE 3</td>
            <td>Seattle</td>
            <td>WA</td>
            <td>98101</td>
            <td>206-778-5741</td>
          </tr>
          <tr>
            <td>Zachary</td>
            <td>Borgetti</td>
            <td>USA</td>
            <td>2234 3rd AVE STE 3</td>
            <td>Seattle</td>
            <td>WA</td>
            <td>98101</td>
            <td>206-778-5741</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
