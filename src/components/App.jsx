import React, { Component } from 'react';
import Footer from '../containers/Footer';
import Header from './Header';
import FilterTodoList from '../containers/FilterTodoList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <FilterTodoList />
        <Footer />
      </div>
    )
  }
}

export default App;
