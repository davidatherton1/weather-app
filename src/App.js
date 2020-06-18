import React, { Component } from 'react';
import './App.css';
import WeatherInfo from './WeatherInfo';

class App extends Component {
  render() {
    return (
        <div className="App">
          <WeatherInfo />
        </div>
    );
  }
}

export default App;