import {ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO, TOGGLE_ALL, CLEAR_COMPLETED} from '../constants/todoType';

let nextTodoId = 0;

function todo(state, action){
  switch(action.type){
    case ADD_TODO :
      return {
        id: nextTodoId++,
        text: action.text,
        completed: false
      };
    case EDIT_TODO :
      if(state.id === action.id){
        return {
          ...state,
          text: action.text
        };
      }else{
        return state;
      }
    case TOGGLE_TODO : 
      if(state.id === action.id){
        return {
          ...state,
          completed: !state.completed
        };
      }else{
        return state;
      } 
    case TOGGLE_ALL :
      return {
        ...state,
        completed: action.completed
      }
    default : 
      return state;
  }
}

export function todos(state = [], action){
  switch(action.type){
    case ADD_TODO : 
      return [...state, todo(undefined, action)];
    case DELETE_TODO : 
      return state.filter(t => t.id !== action.id);
    case CLEAR_COMPLETED: 
      return state.filter(t => !t.completed);
    case TOGGLE_ALL : 
    case TOGGLE_TODO : 
    case EDIT_TODO :
      return state.map(t => todo(t, action));
    default : 
      return state;
  }   
}