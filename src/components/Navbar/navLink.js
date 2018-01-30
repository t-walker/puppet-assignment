import React, { Component } from 'react';

import './NavBar.css';

class NavLink extends Component {
  render() {
    return (
      <li><a className="navLink" href={this.props.path.url}>{this.props.path.name}</a></li>
    );
  }
}

export default NavLink;
