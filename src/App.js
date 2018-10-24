import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';
import './components/Calculator'
import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
