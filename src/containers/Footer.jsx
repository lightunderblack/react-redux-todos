import React, {Component} from 'react';
import {connect} from 'react-redux';
import Link from '../components/Link';
import {setVisibilityFilter, clearCompleted} from '../actions';
import {ALL, ACTIVE, COMPLETED} from '../constants/filterType';

function mapState2Props(state){
  return {
    visibilityFilter: state.visibilityFilter,
    activeCount: state.todos.filter(t=>!t.completed).length
  }
}

function mapDispatch2Props(dispatch){
  return {
    setVisibilityFilter (filter){
      dispatch(setVisibilityFilter(filter));  
    },
    clearCompleted () {
      dispatch(clearCompleted());
    }  
  }
}

class Footer extends Component{

  render(){
    const {activeCount, visibilityFilter, setVisibilityFilter, clearCompleted} = this.props;

    return (
      <div className="filter-wrapper clearfix">
        <span className="fl mar-r-20">{activeCount} items left</span>
        <div className="fl">
          <Link operation={()=>setVisibilityFilter(ALL)} disabled={visibilityFilter === ALL}>All</Link>，
          <Link operation={()=>setVisibilityFilter(ACTIVE)} disabled={visibilityFilter === ACTIVE}>Active</Link>，
          <Link operation={()=>setVisibilityFilter(COMPLETED)} disabled={visibilityFilter === COMPLETED}>Completed</Link>        
        </div>
        <div className="fr mar-l-20">
          <Link operation={()=>clearCompleted()}>clear completed</Link>    
        </div>
      </div>
    );
  }
}

Footer = connect(mapState2Props, mapDispatch2Props)(Footer);

export default Footer;