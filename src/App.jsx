import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Home from 'components/views/HomeView';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route exact path="/" component={Home} />
      </Router>
    );
  }
}

export default App;
