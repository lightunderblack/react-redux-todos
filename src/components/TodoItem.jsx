import React, {Component} from 'react';
import classnames from 'classnames';
import EditTodo from './EditTodo';

export default class TodoItem extends Component {
  state = {
    editMode: false
  }

  setEditMode = (editMode = true) => {
    this.setState({
      editMode
    });
  }

  deleteTodo = (e) => {
    const {task, deleteTodo} = this.props;
    deleteTodo(task.id);    
  }

  toggleTodo = (e) => {
    const {task, toggleTodo} = this.props;
    toggleTodo(task.id);
  }

  editTodo = (id, text) => {
    this.setEditMode(false);
    this.props.editTodo(id, text);    
  }

  render(){
    const {task} = this.props;
    const {editMode} = this.state;
    const {completed} = task;

    return (
      <li key={task.id} className={classnames({
        "clearfix": true,
        "edit-mode": editMode,
        "completed": completed
      })}>
        <div className="todo-detail-wrapper" onDoubleClick={this.setEditMode}>
          <input type="checkbox" className="fl mar-r-10" checked={completed} onChange={this.toggleTodo} />
          <div className="todo-content-wrapper">
            <span className="todo-content">{task.text}</span>              
          </div>
          <a href="#" title="删除" className="remove-todo-btn" onClick={this.deleteTodo}>X</a>               
        </div>
        <EditTodo todo={task} editTodo={this.editTodo} setEditMode={this.setEditMode} />
      </li>
    );
  }
}