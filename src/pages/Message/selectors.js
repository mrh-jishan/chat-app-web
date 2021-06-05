import { createSelector } from 'reselect';
import { initialState } from './reducer';

const messageState = state => state.messageList || initialState

const makeSelectContent = () =>
  createSelector(messageState, (substate) => substate.content);

  const makeSelectSlug = () =>
  createSelector(messageState, (substate) => substate.slug);

const makeSelectMessages = () =>
  createSelector(messageState, (substate) => substate.messages);


export {
  messageState,
  makeSelectContent,
  makeSelectMessages,
  makeSelectSlug,
};
