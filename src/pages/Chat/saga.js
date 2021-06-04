import { push } from 'connected-react-router';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { onLogin } from '../../api';
import { CHAT_REQUEST, loginSuccessAction } from './actions';
import { makeSelectBody } from './selectors';

export function* login() {
  const user = yield select(makeSelectBody());
  console.log('user on saga: ', user);
  try {
    const { data } = yield call(onLogin, user);
    console.log('res login: ', data);
    if (data.success) {
      yield put(loginSuccessAction(data.user, data.token));
      yield put(push('/chat'));
    }
  } catch (err) {
    console.log("Error => ", err);
  }
}

export default function* loginPageSaga() {
  yield takeLatest(CHAT_REQUEST, login);
}
