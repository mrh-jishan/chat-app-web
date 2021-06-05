export const OPEN_MODAL_REQUEST = 'app/ChatPage/OPEN_MODAL_REQUEST';
export const CLOSE_MODAL_REQUEST = 'app/ChatPage/CLOSE_MODAL_REQUEST';
export const CHAT_REQUEST = 'app/ChatPage/CHAT_REQUEST';
export const CHAT_SUCCESS = 'app/ChatPage/CHAT_SUCCESS';
export const CHAT_ERROR = 'app/ChatPage/CHAT_ERROR';
export const CHAT_CREATE_REQUEST = 'app/ChatPage/CHAT_CREATE_REQUEST';
export const CHAT_CREATE_SUCCESS = 'app/ChatPage/CHAT_CREATE_SUCCESS';
export const CHAT_CREATE_ERROR = 'app/ChatPage/CHAT_CREATE_ERROR';


export function opneModalAction() {
  return {
    type: OPEN_MODAL_REQUEST,
  };
}

export function closeModalAction() {
  return {
    type: CLOSE_MODAL_REQUEST,
  };
}

export function chatroomAction() {
  return {
    type: CHAT_REQUEST,
  };
}

export function chatroomSuccessAction(rooms) {
  return {
    type: CHAT_SUCCESS,
    rooms,
  };
}

export function chatroomErrorAction(error) {
  return {
    type: CHAT_ERROR,
    error,
  };
}

export function chatroomCreateAction(topic) {
  return {
    type: CHAT_CREATE_REQUEST,
    topic
  };
}

export function chatroomCreateSuccessAction(chatroom, message) {
  return {
    type: CHAT_CREATE_SUCCESS,
    chatroom,
    message
  };
}

export function chatroomCreateErrorAction(error, message) {
  return {
    type: CHAT_CREATE_ERROR,
    error,
    message
  };
}