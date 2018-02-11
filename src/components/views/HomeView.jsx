import React, { Component } from 'react';

import PatientListContainer from 'containers/PatientListContainer';

import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <section>
          <TaskList />
        </section>
        <section>
          <PatientList />
        </section>
      </div>
    );
  }
}


