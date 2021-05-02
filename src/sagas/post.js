import {
  takeLatest,
  call,
  put,
  throttle,
  takeEvery,
  delay,
} from "redux-saga/effects";
import {
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
  LOAD_POST_REQUEST,
} from "../reducers/post";
import { hostGroupData } from "../libs/util/dummyCreator";

// saga

function* loadPostSaga(action) {
  try {
    const dummyPost = hostGroupData(10, 5);

    yield delay(1000);
    yield put({ type: LOAD_POST_SUCCESS, post: dummyPost });
  } catch (error) {
    yield put({ type: LOAD_POST_FAILURE });
  }
}

export function* watchPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPostSaga);
}
