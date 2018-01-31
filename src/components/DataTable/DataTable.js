import React, { Component } from 'react';

import Table from './Table';
import './DataTable.css';
import Controls from './Controls';

class DataTable extends Component {
  render() {
    return (
      <div className="dataTableContainer">
        <Controls />
        <Table />
      </div>
    );
  }
}

export default DataTable;
