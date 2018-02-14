import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PatientList.css';

/* eslint-disable react/prop-types */
const Img = props => (
  <img src={props.src} alt={props.alt} />
);

class PatientList extends Component {
  componentDidMount() {
    // Compmounted
  }

  renderPatientList() {
    const { patients } = this.props;
    if (!patients.length) {
      return 'No Patients defined';
    }

    return (
      <ol>
        {this.props.patients.map(patient => (
          <li key={patient.id} >
            <Img alt={patient.last_name} src={patient.avatar} />
            <span>Name</span>
            <span>{patient.first_name}</span>
          </li>
          ))}
      </ol>
    );
  }

  render() {
    return (
      <div className="PatientList">
        Patients
        { this.renderPatientList() }
      </div>
    );
  }
}

PatientList.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.object),
};

PatientList.defaultProps = {
  patients: [],
};

export default PatientList;
