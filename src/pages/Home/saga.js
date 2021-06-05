import { push } from 'connected-react-router';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { onLogin } from '../../api';
import { loginSuccessAction, LOGIN_REQUEST } from './actions';
import { makeSelectBody } from './selectors';

export function* login() {
  const user = yield select(makeSelectBody());
  try {
    const { data, success } = yield call(onLogin, user);
    if (success) {
      localStorage.setItem('token', data.token);
      yield put(loginSuccessAction(data.user, data.token));
      yield put(push('/chat'));
    }
  } catch (err) {
    console.log("Error => ", err);
  }
}

export default function* loginPageSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}
