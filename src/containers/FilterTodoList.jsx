import { connect } from 'react-redux'
import {toggleTodo, deleteTodo, editTodo} from '../actions';
import TodoList from '../components/TodoList';
import {ACTIVE, COMPLETED} from '../constants/filterType';

function getTodos(state){
  const {todos, visibilityFilter} = state;
  switch(visibilityFilter){
    case ACTIVE : 
      return todos.filter((todo) => !todo.completed);
    case COMPLETED : 
      return todos.filter((todo) => todo.completed);
    default :
      return [...todos];
  }
}

function mapState2Props(state){
  return {
    todos: getTodos(state)
  };
}

function mapDispatch2Props(dispatch){
  return {
    toggleTodo: function(id){
      dispatch(toggleTodo(id));
    },
    deleteTodo: function(id){
      dispatch(deleteTodo(id));
    },
    editTodo: function(id, text){
      dispatch(editTodo(id, text));
    }
  };
}

const FilterTodoList = connect(mapState2Props, mapDispatch2Props)(TodoList);

export default FilterTodoList;