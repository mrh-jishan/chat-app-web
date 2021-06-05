import produce from 'immer';
import { REGISTER_ERROR, REGISTER_REQUEST, REGISTER_SUCCESS } from './actions';

export const initialState = {
  body: {},
  message: '',
  isLoading: false,
  error: {},
  user: {}
};

const loginPageReducer = produce((draft, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      draft.body = action.body;
      draft.isLoading = true;
      break;
    case REGISTER_SUCCESS:
      draft.message = action.message;
      draft.user = action.user;
      draft.isLoading = false;
      break;
    case REGISTER_ERROR:
      draft.body = action.error;
      draft.message = action.message;
      draft.isLoading = false;
      break;
    default:
      return draft;
  }
}, initialState);

export default loginPageReducer;
