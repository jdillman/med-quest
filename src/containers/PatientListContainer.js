import { connect } from 'react-redux';

import PatientList from '../components/patients/PatientList';

const mapStateToProps = state => ({
  patients: state.patients.ordered.map(id => state.patients.byId[id]),
});

export default connect(mapStateToProps)(PatientList);
