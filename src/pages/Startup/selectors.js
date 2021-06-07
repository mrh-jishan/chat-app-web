import { createSelector } from 'reselect';
import { initialState } from './reducer';

const authState = state => state.root || initialState

const makeSelectIsLogged = () =>
  createSelector(authState, (substate) => substate.isLogged);

  const makeSelectToken= () =>
  createSelector(authState, (substate) => substate.token);

export {
  authState,
  makeSelectIsLogged,
  makeSelectToken,
};
