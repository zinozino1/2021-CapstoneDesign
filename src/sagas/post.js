import { takeLatest, call, put, delay } from "redux-saga/effects";
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
  ALLOW_MEMBER_SUCCESS,
  ALLOW_MEMBER_FAILURE,
  REJECT_MEMBER_SUCCESS,
  REJECT_MEMBER_FAILURE,
  ALLOW_MEMBER_REQUEST,
  REJECT_MEMBER_REQUEST,
  LOAD_INTERVAL_GROUPLIST,
  LOAD_INTERVAL_WAITINGLIST,
  LOAD_INTERVAL_GROUPLIST_SUCCESS,
  LOAD_INTERVAL_WAITINGLIST_SUCCESS,
  LOAD_WAITING_MEMBER,
  LOAD_WAITING_MEMBER_SUCCESS,
} from "../reducers/post";
import {
  createGuestRecentTrends,
  createHostRecentTrends,
  createHistoryList,
} from "../libs/util/dummyCreator";
import {
  loadGroupList,
  loadWaitingList,
  loadGroupInfo,
  allowMember,
  rejectMember,
  loadHistoryList,
  loadGuestRecentTrends,
  loadHostRecentTrends,
  loadIntervalGroupList,
  loadIntervalWaitingList,
  loadWaitingMember,
} from "../libs/api/post";

/**
 * @author 박진호
 * @version 1.0
 * @summary 포스트관련 사가 정의
 */

// saga

function* loadPostSaga(action) {
  try {
    const res = yield call(loadGroupInfo, action.payload);

    yield put({ type: LOAD_POST_SUCCESS, groupDetail: res });
  } catch (error) {
    yield put({ type: LOAD_POST_FAILURE });
  }
}

function* loadGroupListSaga(action) {
  try {
    const res = yield call(loadGroupList, action.payload);

    yield put({ type: LOAD_GROUP_LIST_SUCCESS, groupList: res });
  } catch (error) {
    yield put({ type: LOAD_GROUP_LIST_FAILURE });
  }
}

function* loadWaitingListSaga(action) {
  try {
    const res = yield call(loadWaitingList, action.payload);

    yield put({ type: LOAD_WAITING_LIST_SUCCESS, waitingList: res });
  } catch (error) {
    yield put({ type: LOAD_WAITING_LIST_FAILURE });
  }
}

function* loadGuestRecentTrendsSaga(action) {
  try {
    const res = yield call(loadGuestRecentTrends, action.payload);
    yield delay(100);
    yield put({
      type: LOAD_GUEST_RECENT_TRENDS_SUCCESS,
      guestRecentTrends: res.data,
    });
  } catch (error) {
    yield put({ type: LOAD_GUEST_RECENT_TRENDS_FAILURE });
  }
}

function* loadHostRecentTrendsSaga(action) {
  try {
    const res = yield call(loadHostRecentTrends, action.payload);
    yield delay(100);
    yield put({
      type: LOAD_HOST_RECENT_TRENDS_SUCCESS,
      hostRecentTrends: res.data,
    });
  } catch (error) {
    yield put({ type: LOAD_HOST_RECENT_TRENDS_FAILURE });
  }
}

function* loadHistoryListSaga(action) {
  try {
    const res = yield call(loadHistoryList, action.payload);

    yield put({
      type: LOAD_HISTORY_LIST_SUCCESS,
      historyList: res.data,
    });
  } catch (error) {
    yield put({ type: LOAD_HISTORY_LIST_FAILURE });
  }
}

function* allowMemberSaga(action) {
  try {
    const res = yield call(allowMember, action.payload);

    yield put({
      type: ALLOW_MEMBER_SUCCESS,
    });
  } catch (error) {
    yield put({ type: ALLOW_MEMBER_FAILURE });
  }
}

function* rejectMemberSaga(action) {
  try {
    const res = yield call(rejectMember, action.payload);

    yield put({
      type: REJECT_MEMBER_SUCCESS,
    });
  } catch (error) {
    yield put({ type: REJECT_MEMBER_FAILURE });
  }
}

function* loadIntervalGroupListSaga(action) {
  try {
    const res = yield call(loadIntervalGroupList, action.payload);
    yield put({ type: LOAD_INTERVAL_GROUPLIST_SUCCESS, res: res.data });
  } catch (error) {
    console.log(error);
  }
}

function* loadIntervalWaitingListSaga(action) {
  try {
    const res = yield call(loadIntervalWaitingList, action.payload);
    yield put({ type: LOAD_INTERVAL_WAITINGLIST_SUCCESS, res: res.data });
  } catch (error) {
    console.log(error);
  }
}

function* loadWaitingMemberSaga(action) {
  try {
    const res = yield call(loadWaitingMember, action.payload);

    yield put({ type: LOAD_WAITING_MEMBER_SUCCESS, res: res.data });
  } catch (error) {
    console.log(error);
  }
}

export function* watchPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPostSaga);
  yield takeLatest(LOAD_GROUP_LIST_REQUEST, loadGroupListSaga);
  yield takeLatest(LOAD_WAITING_LIST_REQUEST, loadWaitingListSaga);
  yield takeLatest(LOAD_GUEST_RECENT_TRENDS_REQUEST, loadGuestRecentTrendsSaga);
  yield takeLatest(LOAD_HOST_RECENT_TRENDS_REQUEST, loadHostRecentTrendsSaga);
  yield takeLatest(LOAD_HISTORY_LIST_REQEUST, loadHistoryListSaga);
  yield takeLatest(ALLOW_MEMBER_REQUEST, allowMemberSaga);
  yield takeLatest(REJECT_MEMBER_REQUEST, rejectMemberSaga);
  yield takeLatest(LOAD_INTERVAL_GROUPLIST, loadIntervalGroupListSaga);
  yield takeLatest(LOAD_INTERVAL_WAITINGLIST, loadIntervalWaitingListSaga);
  yield takeLatest(LOAD_WAITING_MEMBER, loadWaitingMemberSaga);
}
