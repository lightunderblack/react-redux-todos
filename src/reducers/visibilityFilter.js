import {SET_VISIBILITY_FILTER} from '../constants/filterType';

export function visibilityFilter(state = "ALL", action){
  switch(action.type){
    case SET_VISIBILITY_FILTER : 
      return action.filter;
    default : 
      return state;
  }
}