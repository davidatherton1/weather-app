import React, { Component } from 'react';
import './App.css';
import WeekContainer from './WeekContainer';
import Search from './search';

class App extends Component {
  render() {
    return (
        <div className="App">
          <WeekContainer />
        </div>
    );
  }
}

export default App;