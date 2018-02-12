import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { appStart } from './modules/UIModule';
import HomeView from './components/views/HomeView';
// import PatientsView from './components/views/HomeView';
// <Route exact path="/patients" component={PatientsView} />
import './App.css';

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={HomeView} />
  </React.Fragment>
);

const Loading = () => (
  <div>Loading</div>
);

class App extends Component {
  componentDidMount() {
    this.props.appStart();
  }

  render() {
    return (
      <section className="main-app">
        {
          !this.props.ready
          ? <Loading />
          : <Routes />
        }
      </section>
    );
  }
}

App.propTypes = {
  ready: PropTypes.bool,
  appStart: PropTypes.func.isRequired,
};

App.defaultProps = {
  ready: false,
};

const mapStateToProps = state => (
  { ready: state.ui.ready }
);

export default connect(mapStateToProps, { appStart })(App);
