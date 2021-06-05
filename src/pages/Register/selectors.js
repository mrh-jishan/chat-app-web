import { createSelector } from 'reselect';
import { initialState } from './reducer';

const registerState = state => state.register || initialState

const makeSelectBody = () =>
  createSelector(registerState, (substate) => substate.body);

export {
  registerState,
  makeSelectBody,
};
