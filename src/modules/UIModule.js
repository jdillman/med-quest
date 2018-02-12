// Initial state
export const initialState = {
  ready: false,
};

// Actions
export const UI_START = 'ui:start';
export const UI_READY = 'ui:ready';

// Action creators
export function appStart() {
  return { type: UI_START };
}
export function appReady() {
  return { type: UI_READY };
}

// Reducers
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UI_START:
      return { ...state, ready: false };
    case UI_READY:
      return { ...state, ready: true };
    default:
  }
  return state;
}
