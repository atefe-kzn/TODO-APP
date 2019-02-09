import React, { Component } from "react";
const allItems = 'all';
const activeItems = 'active';
const completedItems = 'completed';
 
class TodoItems extends Component {
    constructor (props){
        super(props);
        this.state = {
          show: allItems,
          completed: this.props.entries.completed || false
        };
        this.createTasks = this.createTasks.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

  createTasks(item) {
    return (
    <li key={item.key} className={this.state.completed ? "complete" : ""}>
    <input type="checkbox" checked={this.state.completed} onChange={this.handleChange}></input>
               {item.text}
               <span onClick={() => this.delete(item.key)}  className="remove">  </span>
    </li>
    )}
 
  delete(key) {
    this.props.delete(key);
  }

  handleChange() {
    this.setState({ completed: !this.state.completed });
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