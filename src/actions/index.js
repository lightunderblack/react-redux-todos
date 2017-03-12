import {
  ADD_TODO, 
  TOGGLE_TODO, 
  TOGGLE_ALL, 
  CLEAR_COMPLETED, 
  DELETE_TODO, 
  EDIT_TODO
} from '../constants/todoType';

import {SET_VISIBILITY_FILTER} from '../constants/filterType';

export function addTodo(text) {
  return {
    text,
    type: ADD_TODO
  }
}

export function deleteTodo(id) {
  return {
    id,
    type: DELETE_TODO
  }
}

export function editTodo(id, text){
  return {
    id,
    text,
    type: EDIT_TODO
  }
}

export function toggleTodo(id) {
  return {
    id,
    type: TOGGLE_TODO
  }
}

export function toggleAll(completed) {
  return {
    completed,
    type: TOGGLE_ALL
  }
}

export function clearCompleted(){
  return {
    type: CLEAR_COMPLETED
  }
}

export function setVisibilityFilter(filter) {
  return {
    filter,
    type: SET_VISIBILITY_FILTER
  }
}