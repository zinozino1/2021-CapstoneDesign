import { takeLatest, call, put, delay, throttle } from "redux-saga/effects";
import {
  SET_USER_REQUEST,
  LOG_IN_REQUEST,
  LOG_OUT_REQUEST,
  REGISTER_REQUEST,
} from "../reducers/user";

// saga

function* setUserSaga(action) {
  try {
    // // const res = yield call(setUser);
    // if (!res.data.user) {
    //   yield put({ type: SET_USER_SUCCESS, user: null });
    // } else {
    //   yield put({ type: SET_USER_SUCCESS, user: res.data.user });
    // }
  } catch (error) {
    console.log(error);
    //yield put({ type: SET_USER_FAILURE });
  }
}

function* loginSaga(action) {
  // try {
  //   const res = yield call(login, action.payload);
  //   yield put({ type: LOG_IN_SUCCESS, user: res.data.user });
  // } catch (error) {
  //   console.log(error);
  //   alert("이메일 인증을 완료해주세요.");
  //   axios
  //     .post(`/api/mailAuth`, { email: action.payload.email })
  //     .then((res) => {
  //       alert("인증 링크가 포함된 이메일을 다시 보내드렸습니다. 확인해주세요!");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   yield put({ type: LOG_IN_FAILURE });
  // }
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
