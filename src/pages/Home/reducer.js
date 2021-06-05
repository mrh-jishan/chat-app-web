import produce from 'immer';
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from './actions';

export const initialState = {
  body: {},
  token: '',
  isLoading: false,
  isLogged: false,
  error: {},
  user: {}
};

const loginPageReducer = produce((draft, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      draft.body = action.user;
      draft.isLoading = true;
      break;
    case LOGIN_SUCCESS:
      draft.token = action.token;
      draft.user = action.user;
      draft.isLogged = true;
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
