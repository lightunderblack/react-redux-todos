import React, {Component} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component{
  render(){
    return (
      <ul className="todo-list">
        {this.props.todos.map((task) => {
          return <TodoItem key={task.id} {...this.props} task={task} />
        })}
      </ul>
    );
  }
} 