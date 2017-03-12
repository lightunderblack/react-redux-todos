import {connect} from 'react-redux';
import React, {Component} from 'react';
import Link from '../components/Link';
import {setVisibilityFilter} from '../actions';

function mapState2Props(state){
  return {
    visibilityFilter: state.visibilityFilter
  };
}

function mapDispatch2Props(dispatch){
  return {
    setVisibilityFilter: function(filter){
      dispatch(setVisibilityFilter(filter));
    }

      
  }
}

const FilterLink = connect(mapState2Props, mapDispatch2Props)(Link);

export default FilterLink;