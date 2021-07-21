import { takeLatest, call, put } from "redux-saga/effects";
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
import { login } from "../libs/api/user";

/**
 * @author 박진호
 * @version 1.0
 * @summary 유저 관련 사가 정의
 */

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
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...res,
          data: { ...res.data, image2: "", image3: "" },
        }),
      );
    } else {
      localStorage.removeItem("user");
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...res,
          data: { ...res.data, image2: "", image3: "" },
        }),
      );
    }
    yield put({ type: LOG_IN_SUCCESS, me: res });
  } catch (error) {
    yield put({ type: LOG_IN_FAILURE });
  }
}

function* logoutSaga(action) {} // deprecated

function* registerSaga(action) {} // deprecated

// watcher

export function* watchUser() {
  yield takeLatest(SET_USER_REQUEST, setUserSaga);
  yield takeLatest(LOG_IN_REQUEST, loginSaga);
  yield takeLatest(LOG_OUT_REQUEST, logoutSaga);
  yield takeLatest(REGISTER_REQUEST, registerSaga);
}
