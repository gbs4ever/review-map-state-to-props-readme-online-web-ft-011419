import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {
// this calls the dispatch function with an action depending what the user clicked 
  handleOnClickItems() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.items.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  debugger;
  return { orangePeel: ['a', 'b', 'c'] };
}

export default connect(mapStateToProps)(App);
