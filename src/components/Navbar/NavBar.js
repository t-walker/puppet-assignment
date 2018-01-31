import React, { Component } from 'react';

import NavLink from './navLink';

import './NavBar.css';


class Navbar extends Component {

  renderNavItems() {
    let navItems = [];
    
    for(let i = 0; i < this.props.paths.length; i++) {
      let navItem = this.props.paths[i];
      navItems.push(<NavLink className="navBar" key={i} path={{name: navItem.name, url: this.props.paths[i].url}} />)
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
