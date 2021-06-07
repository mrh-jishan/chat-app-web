import produce from 'immer';
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from './actions';

export const initialState = {
  body: {},
  isLoading: false,
  error: {},
};

const loginPageReducer = produce((draft, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      draft.body = action.user;
      draft.isLoading = true;
      break;
    case LOGIN_SUCCESS:
      draft.isLoading = false;
      break;
    case LOGIN_ERROR:
      draft.body = action.error;
      draft.isLoading = false;
      break;
    default:
      return draft;
  }
}, initialState);

export default loginPageReducer;
