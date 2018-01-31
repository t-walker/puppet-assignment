import React, { Component } from 'react';

import NavBar from './components/Navbar/NavBar';

import './App.css';
import DataTable from './components/DataTable/DataTable';

class App extends Component {
  constructor() {
    super();
    
    this.paths = [
      {name: "Nav Item 1", url: "#"},
      {name: "Nav Item 2", url: "#"},
      {name: "Nav Item 3", url: "#"}
    ];
  }

  render() {
    return (
      <div className="App">
        <NavBar paths={this.paths} />
        <DataTable />
      </div>
    );
  }
}

export default App;
