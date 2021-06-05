/*
 *
 * LoginPage reducer
 *
 */

import produce from 'immer';
import { MESSAGE_ERROR, MESSAGE_REQUEST, MESSAGE_SUCCESS, NEW_MESSAGE_ERROR, NEW_MESSAGE_REQUEST, NEW_MESSAGE_SUCCESS, NEW_SOCKET_MESSAGE_SUCCESS } from './actions';

export const initialState = {
  content: null,
  isLoading: false,
  error: {},
  messages: [],
  slug: null,
  message: {}
};

const loginPageReducer = produce((draft, action) => {
  switch (action.type) {
    case MESSAGE_REQUEST:
      draft.slug = action.slug;
      draft.isLoading = true;
      break;
    case MESSAGE_SUCCESS:
      draft.messages = action.messages;
      draft.isLoading = false;
      break;
    case MESSAGE_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;

    case NEW_MESSAGE_REQUEST:
      draft.isLoading = true;
      draft.content = action.content
      break;
    case NEW_MESSAGE_SUCCESS:
      draft.message = action.message;
      draft.isLoading = false;
      break;
    case NEW_MESSAGE_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;

    case NEW_SOCKET_MESSAGE_SUCCESS:
      draft.messages.push(action.message);
      break;
    default:
      return draft;
  }
}, initialState);

export default loginPageReducer;
