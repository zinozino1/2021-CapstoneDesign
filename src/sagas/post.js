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
  LOAD_GROUP_LIST_SUCCESS,
  LOAD_GROUP_LIST_FAILURE,
  LOAD_GROUP_LIST_REQUEST,
  LOAD_WAITING_LIST_SUCCESS,
  LOAD_WAITING_LIST_FAILURE,
  LOAD_WAITING_LIST_REQUEST,
  LOAD_GUEST_RECENT_TRENDS_SUCCESS,
  LOAD_GUEST_RECENT_TRENDS_FAILURE,
  LOAD_HOST_RECENT_TRENDS_SUCCESS,
  LOAD_HOST_RECENT_TRENDS_FAILURE,
  LOAD_GUEST_RECENT_TRENDS_REQUEST,
  LOAD_HOST_RECENT_TRENDS_REQUEST,
  LOAD_HISTORY_LIST_SUCCESS,
  LOAD_HISTORY_LIST_FAILURE,
  LOAD_HISTORY_LIST_REQEUST,
} from "../reducers/post";
import {
  hostGroupData,
  guestGroupData,
  groupList,
  waitingList,
  createGuestRecentTrends,
  createHostRecentTrends,
  createHistoryList,
} from "../libs/util/dummyCreator";

// saga

function* loadPostSaga(action) {
  // action.payload -> url 파라미터 뜻함

  console.log(action.payload); // yield call 에 payload 박으면 된다
  try {
    const dummyPost = hostGroupData(10, 5);
    const dummyPost2 = guestGroupData();

    yield delay(100);
    yield put({ type: LOAD_POST_SUCCESS, groupDetail: dummyPost });
  } catch (error) {
    yield put({ type: LOAD_POST_FAILURE });
  }
}

function* loadGroupListSaga() {
  try {
    const dummyPost = groupList(15);

    yield delay(500);
    yield put({ type: LOAD_GROUP_LIST_SUCCESS, groupList: dummyPost });
  } catch (error) {
    yield put({ type: LOAD_GROUP_LIST_FAILURE });
  }
}

function* loadWaitingListSaga() {
  try {
    const dummyPost = waitingList(10);

    yield delay(500);
    yield put({ type: LOAD_WAITING_LIST_SUCCESS, waitingList: dummyPost });
  } catch (error) {
    yield put({ type: LOAD_WAITING_LIST_FAILURE });
  }
}

function* loadGuestRecentTrendsSaga() {
  try {
    const dummyPost = createGuestRecentTrends();

    yield delay(100);
    yield put({
      type: LOAD_GUEST_RECENT_TRENDS_SUCCESS,
      guestRecentTrends: dummyPost,
    });
  } catch (error) {
    yield put({ type: LOAD_GUEST_RECENT_TRENDS_FAILURE });
  }
}

function* loadHostRecentTrendsSaga() {
  try {
    const dummyPost = createHostRecentTrends();

    yield delay(100);
    yield put({
      type: LOAD_HOST_RECENT_TRENDS_SUCCESS,
      hostRecentTrends: dummyPost,
    });
  } catch (error) {
    yield put({ type: LOAD_HOST_RECENT_TRENDS_FAILURE });
  }
}

function* loadHistoryListSaga() {
  try {
    const dummyPost = createHistoryList();

    yield delay(100);
    yield put({
      type: LOAD_HISTORY_LIST_SUCCESS,
      historyList: dummyPost,
    });
  } catch (error) {
    yield put({ type: LOAD_HISTORY_LIST_FAILURE });
  }
}

export function* watchPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPostSaga);
  yield takeLatest(LOAD_GROUP_LIST_REQUEST, loadGroupListSaga);
  yield takeLatest(LOAD_WAITING_LIST_REQUEST, loadWaitingListSaga);
  yield takeLatest(LOAD_GUEST_RECENT_TRENDS_REQUEST, loadGuestRecentTrendsSaga);
  yield takeLatest(LOAD_HOST_RECENT_TRENDS_REQUEST, loadHostRecentTrendsSaga);
  yield takeLatest(LOAD_HISTORY_LIST_REQEUST, loadHistoryListSaga);
}
