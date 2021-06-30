import produce from 'immer';
import { CHECK_LOGIN_ERROR, CHECK_LOGIN_REQUEST, CHECK_LOGIN_SUCCESS, LOGOUT_REQUEST } from './actions';

export const initialState = {
  token: '',
  isLoading: false,
  isLogged: false,
  error: {},
  user: {}
};

const checkLoginPageReducer = produce((draft, action) => {
  switch (action.type) {
    case CHECK_LOGIN_REQUEST:
      draft.token = action.token;
      draft.isLoading = true;
      break;
    case CHECK_LOGIN_SUCCESS:
      draft.token = action.token;
      draft.user = action.user;
      draft.isLogged = true;
      draft.isLoading = false;
      break;
    case CHECK_LOGIN_ERROR:
      draft.body = action.error;
      draft.isLoading = false;
      break;
    case LOGOUT_REQUEST:
      draft.isLogged = false;
      break;
    default:
      return draft;
  }
}, initialState);

export default checkLoginPageReducer;
