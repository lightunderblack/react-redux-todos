import React, {Component} from 'react';

export default class EditTodo extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: this.props.todo.text
    };
  }

  saveTodo = (e) => {
    let text = this.element.value.trim();
    const {todo, editTodo} = this.props;

    if(text){
      editTodo(todo.id, text);
    }

    e && e.preventDefault();
  }

  onBlur = (e) => {
    this.props.setEditMode(false);
    this.saveTodo();
  }

  onChange = (e) => {
    this.setState({
      text: this.element.value
    })
  }

  render(){
    return (
      <div className="edit-todo-wrapper">
        <form onSubmit={this.saveTodo}>
          <input 
            type="text" 
            value={this.state.text} 
            className="edit-todo-input" 
            ref={el => this.element = el} 
            onChange={this.onChange} 
            onBlur={this.onBlur} />
        </form>
      </div>    
    );
  }
}