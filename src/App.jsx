import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/views/HomeView';
import './App.css';

export default class App extends Component {
  componentDidMount() {
    // AppMounted
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    );
  }
}
