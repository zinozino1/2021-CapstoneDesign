import { all, fork } from "redux-saga/effects";
import { watchPost } from "./post";

function* rootSaga() {
  yield all([fork(watchPost)]);
}

export default rootSaga;
