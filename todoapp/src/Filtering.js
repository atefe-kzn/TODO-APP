import React, { Component } from "react";

class Filtering extends Component {
    constructor (props){
        super(props);
        this.count = (this.props.count, 'item');
      }

  render() {
    var todoEntries = this.props.count.length;

    return (
        <footer className="filtering">
        <span className="items-count">
          <strong>{todoEntries}</strong> items left
        </span>
        <ul className="filters">
          <li>
            <a>
                All
            </a>
          </li>
          {' '}
          <li>
            <a>
                Active
            </a>
          </li>
          {' '}
          <li>
            <a>
                Completed
            </a>
          </li>
        </ul>
        <span className="items-clear">
        <a>clearButton</a>
        </span>
      </footer>
    );
  }
};
 
export default Filtering;