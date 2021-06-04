export const CHAT_REQUEST = 'app/ChatPage/LOGIN_REQUEST';
export const CHAT_SUCCESS = 'app/ChatPage/LOGIN_SUCCESS';
export const CHAT_ERROR = 'app/ChatPage/LOGIN_ERROR';


export function loginAction(user) {
  return {
    user,
    type: CHAT_REQUEST,
  };
}

export function loginSuccessAction(user, token) {
  return {
    type: CHAT_SUCCESS,
    user,
    token,
  };
}

export function loginErrorAction(error) {
  return {
    type: CHAT_ERROR,
    error,
  };
}
