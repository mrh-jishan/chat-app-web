import { notification } from 'antd';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { onChatroom, onCreateChatroom } from '../../api';
import {
  chatroomCreateErrorAction,
  chatroomCreateSuccessAction,
  chatroomSuccessAction,
  CHAT_CREATE_REQUEST,
  CHAT_REQUEST
} from './actions';
import { makeSelectTopic } from './selectors';

export function* chatroom() {
  try {
    const { data, success } = yield call(onChatroom);
    console.log('res login: ', data);
    if (success) {
      yield put(chatroomSuccessAction(data.rooms));
    }
  } catch (err) {
    console.log("Error => ", err);
  }
}

export function* createChatroom() {
  const topic = yield select(makeSelectTopic());
  try {
    const { data, success, message } = yield call(onCreateChatroom, topic);
    if (success) {
      yield put(chatroomCreateSuccessAction(data.chatroom, message));
      notification.info({
        description: message,
        placement: 'bottomRight',
      });
    } else {
      yield put(chatroomCreateErrorAction({}, message));
      notification.error({
        message: message,
        placement: 'bottomRight'
      })
    }
  } catch (err) {
    console.log("Error => ", err);
    yield put(chatroomCreateErrorAction(err, ""));
    notification.error({
      message: err,
      placement: 'bottomRight'
    })
  }
}
export default function* chatroomPageSaga() {
  yield takeLatest(CHAT_REQUEST, chatroom);
  yield takeLatest(CHAT_CREATE_REQUEST, createChatroom);
}
