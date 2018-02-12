import { connect } from 'react-redux';

import PatientList from '../components/patients/PatientList';

const mapStateToProps = () => ({ patients: {} });

export default connect(mapStateToProps)(PatientList);
