import { notification } from 'antd';
import { push } from 'connected-react-router';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { onLogin } from '../../api';
import { loginSuccessAction, LOGIN_REQUEST } from './actions';
import { makeSelectBody } from './selectors';

export function* login() {
  const user = yield select(makeSelectBody());
  try {
    const { data, success, message } = yield call(onLogin, user);
    if (success) {
      localStorage.setItem('token', data.token);
      yield put(loginSuccessAction(data.user, data.token));
      notification.info({
        description: message,
        placement: 'bottomRight',
      });
      yield put(push('/chat'));
    } else {
      notification.error({
        description: message,
        placement: 'bottomRight',
      });
    }
  } catch (err) {
    console.log("Error => ", err);
    notification.info({
      description: err,
      placement: 'bottomRight',
    });
  }
}

export default function* loginPageSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}
