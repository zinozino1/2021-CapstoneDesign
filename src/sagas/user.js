import { takeLatest, call, put, delay, throttle } from "redux-saga/effects";
import {
  SET_USER_REQUEST,
  LOG_IN_REQUEST,
  LOG_OUT_REQUEST,
  REGISTER_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SET_USER_SUCCESS,
  SET_USER_FAILURE,
} from "../reducers/user";
import { createUser } from "../libs/util/dummyCreator";
import { login } from "../libs/api/user";

// saga

function* setUserSaga() {
  try {
    yield put({
      type: SET_USER_SUCCESS,
      me: JSON.parse(localStorage.getItem("user")),
    });
  } catch (error) {
    yield put({ type: SET_USER_FAILURE });
  }
}

function* loginSaga(action) {
  try {
    const res = yield call(login, action.payload);

    const user = localStorage.getItem("user");
    if (!user) {
      localStorage.setItem("user", JSON.stringify(res));
    } else {
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify(res));
    }
    yield put({ type: LOG_IN_SUCCESS, me: res });
  } catch (error) {
    yield put({ type: LOG_IN_FAILURE });
  }
}

function* logoutSaga(action) {
  // try {
  //   yield call(logout);
  //   yield put({ type: LOG_OUT_SUCCESS });
  //   window.location.href = `/`;
  // } catch (error) {
  //   console.log(error);
  //   yield put({ type: LOG_OUT_FAILURE });
  // }
}

function* registerSaga(action) {
  // try {
  //   yield call(register, action.data);
  //   yield put({ type: REGISTER_SUCCESS });
  // } catch (error) {
  //   yield put({ type: REGISTER_FAILURE });
  // }
}

// watcher

export function* watchUser() {
  yield takeLatest(SET_USER_REQUEST, setUserSaga);
  yield takeLatest(LOG_IN_REQUEST, loginSaga);
  yield takeLatest(LOG_OUT_REQUEST, logoutSaga);
  yield takeLatest(REGISTER_REQUEST, registerSaga);
}
