import React, { Component } from "react";

class Filtering extends Component {
    constructor (props){
        super(props);
        this.count = (this.props.count, 'item');
      }


  render() {
    var todoNotCheck = this.props.count;

    if (todoNotCheck > 0){
    return (
        <footer className="filtering">
        <span className="items-count">
          <strong>{todoNotCheck}</strong> items
        </span>
        <ul className="filters">
          <li>
            <span onClick={() => this.props.onFilter("all" )} className="selected">
                All
            </span>
          </li>
          <li>
            <span onClick={() => this.props.onFilter("active")}>
                Active
            </span>
          </li>
          <li>
            <span onClick={() => this.props.onFilter("completed")} >
                Completed
            </span>
          </li>
        </ul>
        <span className="items-clear">
        <span onClick={() =>this.props.clearCompleted()}>clearButton</span>
        </span>
      </footer>
    );
}else
    return null;
  }
};
 
export default Filtering;