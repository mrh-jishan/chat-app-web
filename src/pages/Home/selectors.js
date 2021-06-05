import { createSelector } from 'reselect';
import { initialState } from './reducer';

const authState = state => state.auth || initialState

const makeSelectBody = () =>
  createSelector(authState, (substate) => substate.body);

const makeSelectIsLogged = () =>
  createSelector(authState, (substate) => substate.isLogged);

export {
  authState,
  makeSelectBody,
  makeSelectIsLogged,
};
