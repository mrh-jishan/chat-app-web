export const CHECK_LOGIN_REQUEST = 'app/StartUpPage/CHECK_LOGIN_REQUEST';
export const CHECK_LOGIN_SUCCESS = 'app/StartUpPage/CHECK_LOGIN_SUCCESS';
export const CHECK_LOGIN_ERROR = 'app/StartUpPage/CHECK_LOGIN_ERROR';
export const LOGOUT_REQUEST = 'app/StartUpPage/LOGOUT_REQUEST';

export function checkLoginAction(token) {
  return {
    type: CHECK_LOGIN_REQUEST,
    token,
  };
}

export function checkLoginSuccessAction(user, token) {
  return {
    type: CHECK_LOGIN_SUCCESS,
    token,
    user
  };
}

export function checkLoginErrorAction(error) {
  return {
    type: CHECK_LOGIN_ERROR,
    error,
  };
}

export function logoutAction() {
  return {
    type: LOGOUT_REQUEST,
  };
}
