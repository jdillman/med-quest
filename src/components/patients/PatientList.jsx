import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import './Home.css';

class PatientList extends Component {
  componentDidMount() {
    // Compmounted
  }

  renderPatientList() {
    return this.props.patients.map(patient => (
      <div key={patient.id}>
        <span>Name</span>
        <img alt={patient.last_name} src={patient.avatar} />
        <span>{patient.first_name}</span>
      </div>
    ));
  }

  render() {
    return (
      <div>
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
