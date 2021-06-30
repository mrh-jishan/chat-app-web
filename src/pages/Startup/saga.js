import { call, put, select, takeLatest } from 'redux-saga/effects';
import { onGetUser } from '../../api';
import { checkLoginErrorAction, checkLoginSuccessAction, CHECK_LOGIN_REQUEST, LOGOUT_REQUEST } from './actions';
import { makeSelectToken } from './selectors';


export function* checkLogin() {
  const token = yield select(makeSelectToken());
  try {
    const { data, success } = yield call(onGetUser);
    if (success) {
      yield put(checkLoginSuccessAction(data.user, token));
    } else {
      yield put(checkLoginErrorAction({}));
    }
  } catch (err) {
    console.log("Error => ", err);
    yield put(checkLoginErrorAction(err));
  }
}

export function checkLogout() {
 localStorage.clear();
}

export default function* loginPageSaga() {
  yield takeLatest(CHECK_LOGIN_REQUEST, checkLogin);
  yield takeLatest(LOGOUT_REQUEST, checkLogout);
}
