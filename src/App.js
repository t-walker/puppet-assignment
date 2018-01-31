import React, { Component } from 'react';

import NavBar from './components/Navbar/NavBar';

import './App.css';
import DataTable from './components/DataTable/DataTable';

import mockData from './assets/MOCK_DATA.json';

class App extends Component {
  constructor() {
    super();
    
    this.paths = [
      {name: "Nav Item 1", url: "#"},
      {name: "Nav Item 2", url: "#"},
      {name: "Nav Item 3", url: "#"}
    ];

    this.headers = [
      "First Name", "Last Name", "Country", "Address", "City", "State", "Zip", "Phone"
    ];

    this.data = mockData;
  }

  render() {
    return (
      <div className="App">
        <NavBar paths={this.paths} />
        <DataTable data={this.data} />
      </div>
    );
  }
}

export default App;
