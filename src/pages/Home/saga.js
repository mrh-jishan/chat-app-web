import { notification } from 'antd';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { onLogin } from '../../api';
import { checkLoginSuccessAction } from '../Startup/actions';
import { loginErrorAction, loginSuccessAction, LOGIN_REQUEST } from './actions';
import { makeSelectBody } from './selectors';

export function* login() {
  const user = yield select(makeSelectBody());
  try {
    const { data, success, message } = yield call(onLogin, user);
    if (success) {
      localStorage.setItem('token', data.token);
      yield put(loginSuccessAction());
      yield put(checkLoginSuccessAction(data.user, data.token));
      notification.info({
        description: message,
        placement: 'bottomRight',
      });
    } else {
      yield put(loginErrorAction({}));
      notification.error({
        description: message,
        placement: 'bottomRight',
      });
    }
  } catch (err) {
    console.log("Error => ", err);
    yield put(loginErrorAction(err));
    notification.info({
      description: err,
      placement: 'bottomRight',
    });
  }
}

export default function* loginPageSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}
