export const REGISTER_REQUEST = 'app/RegisterPage/REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'app/RegisterPage/REGISTER_SUCCESS';
export const REGISTER_ERROR = 'app/RegisterPage/REGISTER_ERROR';


export function registerAction(body) {
  return {
    body,
    type: REGISTER_REQUEST,
  };
}

export function registerSuccessAction(user, message) {
  return {
    type: REGISTER_SUCCESS,
    user,
    message,
  };
}

export function registerErrorAction(error, message) {
  return {
    type: REGISTER_ERROR,
    error,
  };
}
