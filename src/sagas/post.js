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
  // action.payload -> url 파라미터 뜻함

  console.log(action.payload); // yield call 에 payload 박으면 된다
  try {
    const dummyPost = hostGroupData(10, 5);

    yield delay(100);
    yield put({ type: LOAD_POST_SUCCESS, groupDetail: dummyPost });
  } catch (error) {
    yield put({ type: LOAD_POST_FAILURE });
  }
}

export function* watchPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPostSaga);
}
