import { all, fork } from "redux-saga/effects";
import { watchPost } from "./post";
import { watchUser } from "./user";

/**
 * @author 박진호
 * @version 1.0
 * @summary 루트 사가 정의
 */

function* rootSaga() {
  yield all([fork(watchPost), fork(watchUser)]);
}

export default rootSaga;
