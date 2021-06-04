/*
 *
 * LoginPage reducer
 *
 */

import produce from 'immer';
import { CHAT_ERROR, CHAT_REQUEST, CHAT_SUCCESS } from './actions';

export const initialState = {
  body: {},
  token: '',
  isLoading: false,
  isLogged: false,
  error: {}
};

const loginPageReducer = produce((draft, action) => {
  switch (action.type) {
    case CHAT_REQUEST:
      draft.body = action.user;
      draft.isLoading = true;
      break;
    case CHAT_SUCCESS:
      draft.token = action.token;
      draft.user = action.user;
      draft.isLogged = true;
      draft.isLoading = false;
      break;
    case CHAT_ERROR:
      draft.body = action.error;
      draft.isLoading = false;
      break;
    default:
      return draft;
  }
}, initialState);

export default loginPageReducer;
