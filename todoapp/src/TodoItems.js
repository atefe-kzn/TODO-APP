import React, { Component } from "react";
const allItems = 'all';
const activeItems = 'active';
const completedItems = 'completed';
 
class TodoItems extends Component {
    constructor (props){
        super(props);
        this.state = {
          show: allItems
        };
        this.createTasks = this.createTasks.bind(this);
      }

  createTasks(item) {

    return (
    <li key={item.key} className={item.checked ? "complete" : ""}>
    <input type="checkbox" key={item.key} checked={item.checked}  onChange={() => this.props.complete(item)}></input>
               {item.text}
               <span onClick={() => this.delete(item.key)}  className="remove">  </span>
    </li>
    )}
 
  delete(key) {
    this.props.delete(key);
  }

  render() {
    let entries = this.props.entries;
    var show = entries.filter((entries) => {
      switch (this.state.show) {
      case activeItems:
        return !entries.completed;
      case completedItems:
        return entries.completed;
      default:
        return true;
      }
    });
    const listItems = show.map(this.createTasks);
 
    return (
      <ul className="list-item">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;