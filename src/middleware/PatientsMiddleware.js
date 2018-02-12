import { PATIENTS_FETCH, patientsAvailable } from '../modules/PatientsModule';

// TOOD only import on dev where mock makes sense
import mockPatients from '../mock/patients.json';

function PatientsMiddleware(store) {
  return next => (action) => {
    switch (action.type) {
      case PATIENTS_FETCH:
        fetchPatients(store.dispatch);
        break;
      default:
    }

    return next(action);
  };
}

function fetchPatients(dispatch) {
  // Mock fetch patients
  const patients = mockPatients;

  dispatch(patientsAvailable(patients));
}


export default PatientsMiddleware;
