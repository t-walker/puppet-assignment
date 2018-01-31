import React, { Component } from 'react';
import TableRow from './TableRow';

class Table extends Component {
  renderColumns() {
    let rows = []; 

    for (let i = 0; i < this.props.data.length; i++) {
      let row = this.props.data[i];
      rows.push(<TableRow key={i} data={row} />);
    }

    return rows;
  }

  render() {
    return (
      <table className="dataTable" cellSpacing="0">
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
          {this.renderColumns()}
        </tbody>
      </table>
    );
  }
}

export default Table;
