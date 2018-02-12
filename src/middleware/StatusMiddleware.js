import { UI_READY } from '../modules/UIModule';

function StatusMiddleware(store) {
  return next => (action) => {
    switch (action.type) {
      case UI_READY:
        appStart(store.dispatch);
        break;
      default:
    }

    return next(action);
  };
}

// Beacon
function appStart() {
  console.log('app start');
}

export default StatusMiddleware;
