import {
  applyMiddleware,
  createStore,
  compose,
  combineReducers,
} from 'redux';
// Reducers
import ui from './modules/UIModule';
import patients from './modules/PatientsModule';

// Middleware
import StatusMiddleware from './middleware/StatusMiddleware';
import PatientsMiddleware from './middleware/PatientsMiddleware';

const rootReducer = combineReducers({
  ui,
  patients,
});

const middleware = applyMiddleware(StatusMiddleware, PatientsMiddleware);

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middleware);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancers);
}
