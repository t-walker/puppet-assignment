import React, { Component } from 'react';


class TableRow extends Component {
  renderColumns() {
      let columns = [];
      for (let attr in this.props.data) {
          columns.push(<td key={attr}>{this.props.data[attr]}</td>);
      }

      return columns;
  }

  render() {
    return (
        <tr >
            {this.renderColumns()}
        </tr>
    );
  }
}

export default TableRow;
