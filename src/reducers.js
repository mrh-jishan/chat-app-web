import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import history from './history';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
