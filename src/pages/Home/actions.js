export const LOGIN_REQUEST = 'app/LoginPage/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'app/LoginPage/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'app/LoginPage/LOGIN_ERROR';


export function loginAction(user) {
  return {
    user,
    type: LOGIN_REQUEST,
  };
}

export function loginSuccessAction(user, token) {
  return {
    type: LOGIN_SUCCESS,
    user,
    token,
  };
}

export function loginErrorAction(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}
