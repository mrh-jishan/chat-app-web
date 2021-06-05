import { call, put, select, takeLatest } from 'redux-saga/effects';
import { onCreateMessage, onLoadMessage } from '../../api';
import { messageSuccessAction, MESSAGE_REQUEST, newMessageSuccessAction, NEW_MESSAGE_REQUEST } from './actions';
import { makeSelectContent, makeSelectSlug } from './selectors';

export function* onMessage() {
  const slug = yield select(makeSelectSlug());
  try {
    const { data, success } = yield call(onLoadMessage, slug);
    if (success) {
      yield put(messageSuccessAction(data.messages));
    }
  } catch (err) {
    console.log("Error => ", err);
  }
}

export function* onNewMessage() {
  const slug = yield select(makeSelectSlug());
  const content = yield select(makeSelectContent());
  try {
    const { data, success } = yield call(onCreateMessage, slug, content);
    if (success) {
      yield put(newMessageSuccessAction(data.message));
    }
  } catch (err) {
    console.log("Error => ", err);
  }
}

export default function* loginPageSaga() {
  yield takeLatest(MESSAGE_REQUEST, onMessage);
  yield takeLatest(NEW_MESSAGE_REQUEST, onNewMessage);
}
