import React, { Component } from 'react';

import PatientList from '../../containers/PatientListContainer';
import TaskList from '../../containers/TaskListContainer';

// import './Home.css';

export default class Home extends Component {
  componentDidMount() {
    // Compmounted
  }
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

