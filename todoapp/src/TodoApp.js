import React, { Component } from "react";
import TodoItems from "./TodoItems";
import Filtering from "./Filtering";

 
class TodoApp extends Component {
  constructor (props){
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  render() {
    return (
      <div className="todo-main">
        <div className="todo-main_header">
          <form onSubmit={this.addItem} className="todo-form">
            <input ref={(a) => this._inputElement = a}  placeholder="What needs to be done?">
            </input>
            <button type="submit"  className="add-item">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem}/>

        <Filtering count={this.state.items}/>
      </div>
    );
  } 

  addItem(e){
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
        completed: false
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      this._inputElement.value = "";
    }
       
    e.preventDefault();
  }
  
  deleteItem(key) {
    var removededItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: removededItems
    });
  }
}
 
export default TodoApp;