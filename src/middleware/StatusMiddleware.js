import { UI_START, appReady } from '../modules/UIModule';
import { fetchPatients } from '../modules/PatientsModule';

function StatusMiddleware(store) {
  return next => (action) => {
    switch (action.type) {
      case UI_START:
        appStart(store.dispatch);
        break;
      default:
    }

    return next(action);
  };
}

// Beacon
function appStart(dispatch) {
  dispatch(fetchPatients());
  setTimeout(() => dispatch(appReady()));
}

export default StatusMiddleware;
