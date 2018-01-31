import React, { Component } from 'react';

import './Controls.css';

class Controls extends Component {

  listHeader() {
    return (<span className="listHeader">List of Awesome</span>);
  }

  pipeDivider() {
    return (<span className="pipeDivider">|</span>);
  }

  render() {
    return (
        <div className="controls">
            {this.listHeader()} {this.pipeDivider()}
        </div>
    );
  }
}

export default Controls;
