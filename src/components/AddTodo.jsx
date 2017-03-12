import React, {Component} from 'react';
import {addTodo} from '../actions';

export default class AddTodo extends Component{
  state = {
    text: ""
  }

  addTodo = (e) => {
    e.preventDefault();

    let {text} = this.state;
    if(text){
      this.props.onAddTodo(addTodo(text));
      this.setState({
        text: ""
      });
    }
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  render(){ 
    return (
      <form className="add-todo" onSubmit={this.addTodo}>
        <input type="text" onChange={this.onChange} />
        <button type="submit">Add Todo</button>
      </form>      
    )
  }
}