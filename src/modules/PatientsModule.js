// Initial State
export const initialState = {
  byId: {},
};

// Actions
export const PATIENTS_FETCH = 'patients:fetch';
export const PATIENTS_AVAILABLE = 'patients:available';

// Action creators
export function fetchPatients() {
  return { type: PATIENTS_FETCH };
}

export function patientsAvailable(patients) {
  return { type: PATIENTS_AVAILABLE, patients };
}

// Reducers
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PATIENTS_AVAILABLE:
      return { ...state, ...transformArr(action.patients, 'id') };
    default:
  }
  return state;
}

function transformArr(arr, key) {
  const ordered = [];
  const byId = arr.reduce((acc, obj) => {
    ordered.push(obj[key]);
    return {
      ...acc,
      [obj[key]]: obj,
    };
  }, {});

  return {
    ordered,
    byId,
  };
}
