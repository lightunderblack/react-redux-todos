import React, {Component} from 'react';
import AddTodo from './AddTodo';
import {connect} from 'react-redux';
import {toggleAll} from '../actions';

class Header extends Component{
  state = {
    checked: false
  }

  onToggleAllChange = (e) => {
    const value = e.target.checked;
    this.props.dispatch(toggleAll(value));
    this.setState({
      checked: value
    })
  }

  onAddTodo = (action) => {
    this.props.dispatch(action);
    this.setState({
      checked: false
    });
  }

  render(){
    const {checked} = this.state;

    return (
      <div className="todo-header clearfix">
        <input type="checkbox" className="fl toggle-all" checked={checked} onChange={this.onToggleAllChange} />
        <AddTodo className="fl" onAddTodo={this.onAddTodo} />
      </div>
    )
  }
}

Header = connect()(Header);

export default Header;