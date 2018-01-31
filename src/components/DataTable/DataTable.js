import React, { Component } from 'react';

import Table from './Table';
import './DataTable.css';


class DataTable extends Component {
  constructor() {
    super();

    this.data = [];

    this.state = {
      sortBy: "First Name",
      min: 1,
      max: 10,
      count: 10
    }

    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleCountChange = this.handleCountChange.bind(this);

    this.handlePageBack = this.handlePageBack.bind(this);
    this.handlePageForward = this.handlePageForward.bind(this);
  }

  handleSortChange(e) {
    let state = this.state;
    state.sortBy = e.target.value;

    this.setState(state);
  }

  handleCountChange(e) {
    let state = this.state;
    state.count = e.target.value;
    state.max = state.min + +state.count;  
    state = this.restrictPageBoundaries(state);

    this.setState(state);
  }

  updateTable() {
    let count = this.state.count; 
    let sortBy = this.state.sortBy;


    this.data = this.props.data;

    this.data.sort(function(a,b) {return (a[sortBy] > b[sortBy]) ? 1 : ((b[sortBy] > a[sortBy]) ? -1 : 0);} );

    this.data = this.props.data.slice(this.state.min - 1, this.state.max + 1);

  }
  
  componentWillMount() {
    this.updateTable();
  }

  componentWillUpdate() {
    this.updateTable();
  }

  listHeader() {
    return (<span className="listHeader">List of Awesome</span>);
  }

  pipeDivider() {
    return (<span className="pipeDivider">|</span>);
  }

  sortBy() {
    return (
      <div className="sort">
        <label>Sort By: </label>
        <select value={this.state.sortBy} onChange={this.handleSortChange}>
          <option>First Name</option>
          <option>Last Name</option>
          <option>Country</option>
          <option>City</option>
          <option>State</option>
        </select>
      </div>
    )
  }

  itemsPerPage() {
    return (
      <div className="sort" style={{display: "inline-block"}}>
        <label>Items per Page: </label>
        <select value={this.state.count} className="pagination-select"  onChange={this.handleCountChange}>
          <option>5</option>
          <option>10</option>
          <option>25</option>
          <option>75</option>
          <option>100</option>
        </select>
      </div>
    )
  }

  restrictPageBoundaries(state) {
    if (state.min <= 0) {
      state.min = 1;
      state.max = +state.count;
    }

    if (state.max > this.props.data.length) {
      state.min = this.props.data.length - +state.count;
      state.max = this.props.data.length;
    }

    return state;
  }

  handlePageBack(event) {
    let state = this.state;
    state.min = state.min - +state.count;
    state.max = state.max - +state.count;


    state = this.restrictPageBoundaries(state);

    this.setState(state);
  }

  handlePageForward(event) {
    let state = this.state;
    console.log("min: " + state.min);
    console.log("max: " + state.max);
    state.min = state.min + +state.count;
    state.max = state.max + +state.count;
    console.log("-min: " + state.min);
    console.log("-max: " + state.max);

    state = this.restrictPageBoundaries(state);

    this.setState(state);
  }

  pagination() {
    return (
      <div>
          <span className="pagination">{this.state.min} - {this.state.max} of {this.props.data.length}</span> 
      </div>
    )
  }

  arrows() {
    return (
      <div>
        <a style={{float: "right", paddingLeft: "5px"}} className="pagination arrow" onClick={this.handlePageForward}><i class="fa fa-chevron-right" aria-hidden="true"></i></a>
        <a style={{float: "right", paddingRight: "5px"}} className="pagination arrow" onClick={this.handlePageBack}><i class="fa fa-chevron-left" aria-hidden="true"></i></a>
      </div>
    )
  }

  renderControls() {

    return (
      <div  className="controls">
        <div style={{width: "8%", display: "inline-block"}}>
          {this.listHeader()}
        </div>
        <div style={{width: "1%", display: "inline-block"}}>
          {this.pipeDivider()} 
        </div>
        <div style={{width: "20%", display: "inline-block"}}>
          {this.sortBy()} 
        </div>  
        <div style={{width: "45%", display: "inline-block"}}> 
        </div>    
        <div style={{width: "13%", display: "inline-block", textAlign: "right"}}>
          {this.itemsPerPage()} 
        </div>   
        <div style={{width: "8%", display: "inline-block", textAlign: "right"}}>
          {this.pagination()} 
        </div>   
        <div style={{width: "4%", display: "inline-block", float: "right"}}>
          {this.arrows()} 
        </div>   
      </div>
    );
  }

  render() {
    return (
      <div className="dataTableContainer">
        {this.renderControls()}
        <Table data={this.data} />
      </div>
    );
  }
}

export default DataTable;
