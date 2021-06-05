/*
 *
 * LoginPage reducer
 *
 */

import produce from 'immer';
import {
  CHAT_CREATE_ERROR,
  CHAT_CREATE_REQUEST,
  CHAT_CREATE_SUCCESS,
  CHAT_ERROR,
  CHAT_REQUEST,
  CHAT_SUCCESS,
  CLOSE_MODAL_REQUEST,
  OPEN_MODAL_REQUEST
} from './actions';

export const initialState = {
  rooms: [],
  isLoading: false,
  error: {},
  topic: {},
  message: "",
  modalOpen: false,
};

const chatPageReducer = produce((draft, action) => {
  switch (action.type) {
    case CHAT_REQUEST:
      draft.isLoading = true;
      break;
    case CHAT_SUCCESS:
      draft.rooms = action.rooms;
      draft.isLoading = false;
      break;
    case CHAT_ERROR:
      draft.error = action.error;
      draft.isLoading = false;
      break;

    case CHAT_CREATE_REQUEST:
      draft.isLoading = true;
      draft.topic = action.topic
      break;
    case CHAT_CREATE_SUCCESS:
      console.log('action: ', action);
      draft.rooms.push(action.chatroom);
      draft.message = action.message;
      draft.isLoading = false;
      draft.modalOpen = false;
      break;
    case CHAT_CREATE_ERROR:
      console.log('action: ', action);
      draft.error = action.error;
      draft.message = action.message;
      draft.isLoading = true;
      break;

    case OPEN_MODAL_REQUEST:
      draft.modalOpen = true;
      break;

    case CLOSE_MODAL_REQUEST:
      draft.modalOpen = false;
      break;
    default:
      return draft;
  }
}, initialState);

export default chatPageReducer;
