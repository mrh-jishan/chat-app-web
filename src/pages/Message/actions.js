export const MESSAGE_REQUEST = 'app/MessagePage/MESSAGE_REQUEST';
export const MESSAGE_SUCCESS = 'app/MessagePage/MESSAGE_SUCCESS';
export const MESSAGE_ERROR = 'app/MessagePage/MESSAGE_ERROR';

export const NEW_MESSAGE_REQUEST = 'app/MessagePage/NEW_MESSAGE_REQUEST';
export const NEW_MESSAGE_SUCCESS = 'app/MessagePage/NEW_MESSAGE_SUCCESS';
export const NEW_MESSAGE_ERROR = 'app/MessagePage/NEW_MESSAGE_ERROR';

export const NEW_SOCKET_MESSAGE_SUCCESS = 'app/MessagePage/NEW_SOCKET_MESSAGE_SUCCESS';


export function messageAction(slug) {
  return {
    slug,
    type: MESSAGE_REQUEST,
  };
}

export function messageSuccessAction(messages) {
  return {
    type: MESSAGE_SUCCESS,
    messages,
  };
}

export function messageErrorAction(error) {
  return {
    type: MESSAGE_ERROR,
    error,
  };
}

export function newMessageAction(content) {
  return {
    type: NEW_MESSAGE_REQUEST,
    content,
  };
}

export function newMessageSuccessAction(message) {
  return {
    type: NEW_MESSAGE_SUCCESS,
    message,
  };
}

export function newMessageErrorAction(error) {
  return {
    type: NEW_MESSAGE_ERROR,
    error,
  };
}

export function addNewMessageSocketAction(message) {
  return {
    type: NEW_SOCKET_MESSAGE_SUCCESS,
    message,
  };
}