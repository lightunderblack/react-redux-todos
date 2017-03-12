import React, {Component} from 'react';

export default class Link extends Component{
  render(){
    const {
      children,       
      disabled,
      operation                    
    } = this.props;

    if(disabled){
      return <span>{children}</span>;
    }else{
      return <a href="#" onClick={(e) => {
        e.preventDefault();
        operation();
        }}>{children}</a>
    }
  }
}