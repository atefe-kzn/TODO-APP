import React, { Component } from "react";

class Filtering extends Component {
    constructor (props){
        super(props);
        this.count = (this.props.count, 'item');
      }


  render() {
    var todoNotCheck = this.props.count.length;
    var onFilter = this.props.onFilter;

    if (todoNotCheck > 0){
    return (
        <footer className="filtering">
        <span className="items-count">
          <strong>{todoNotCheck}</strong> items
        </span>
        <ul className="filters">
          <li>
            <a onClick={onFilter} value="all" href="#" className="selected">
                All
            </a>
          </li>
          <li>
            <a onClick={onFilter} value="false" href="#">
                Active
            </a>
          </li>
          <li>
            <a onClick={onFilter} value="true" href="#">
                Completed
            </a>
          </li>
        </ul>
        <span className="items-clear">
        <a>clearButton</a>
        </span>
      </footer>
    );
}else
    return null;
  }
};
 
export default Filtering;