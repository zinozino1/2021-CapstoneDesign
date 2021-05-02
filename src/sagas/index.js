import { all, fork } from "redux-saga/effects";
import { watchPost } from "./post";
import { watchUser } from "./user";

function* rootSaga() {
  yield all([fork(watchPost)], fork(watchUser));
}

export default rootSaga;
