import React, { Component } from 'react';

import NavLink from './navLink';

import './NavBar.css';


class Navbar extends Component {

  renderNavItems() {
    let navItems = [];

    for(let i = 0; i < this.props.paths.length; i++) {
      navItems.push(<NavLink path={{name: this.props.paths[i].name, url: this.props.paths[i].url}} />)
    }

    return navItems;
  }
  render() {
    return (
      <div className="navBar">
        <ul>
          {this.renderNavItems()}
        </ul>
      </div>
    );
  }
}

export default Navbar;
