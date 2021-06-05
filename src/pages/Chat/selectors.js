import { createSelector } from 'reselect';
import { initialState } from './reducer';

const chatroomState = state => state.chatroom || initialState

const makeSelectRooms = () =>
  createSelector(chatroomState, (substate) => substate.rooms);

const makeSelectError = () =>
  createSelector(chatroomState, (substate) => substate.error);

const makeSelectModalOpen = () =>
  createSelector(chatroomState, (substate) => substate.modalOpen);

  const makeSelectMessage = () =>
  createSelector(chatroomState, (substate) => substate.message);

const makeSelectTopic = () =>
  createSelector(chatroomState, (substate) => substate.topic);

export {
  chatroomState,
  makeSelectRooms,
  makeSelectError,
  makeSelectModalOpen,
  makeSelectTopic,
  makeSelectMessage,
};
