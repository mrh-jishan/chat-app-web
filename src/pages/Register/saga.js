import { notification } from 'antd';
import { push } from 'connected-react-router';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { onRegister } from '../../api';
import { registerErrorAction, registerSuccessAction, REGISTER_REQUEST } from './actions';
import { makeSelectBody } from './selectors';

export function* register() {
  const user = yield select(makeSelectBody());
  try {
    const { data, success, message } = yield call(onRegister, user);
    if (success) {
      yield put(registerSuccessAction(data.user, message));
      yield put(push('/login'));
      notification.info({
        description: message,
        placement: 'bottomRight',
      });
    } else {
      yield put(registerErrorAction({}, message));
      notification.error({
        message: message,
        placement: 'bottomRight'
      })
    }
  } catch (err) {
    console.log("Error => ", err);
    notification.error({
      message: err,
      placement: 'bottomRight'
    })
  }
}

export default function* loginPageSaga() {
  yield takeLatest(REGISTER_REQUEST, register);
}
