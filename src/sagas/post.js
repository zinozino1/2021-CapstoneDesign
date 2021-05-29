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
  ALLOW_MEMBER_SUCCESS,
  ALLOW_MEMBER_FAILURE,
  REJECT_MEMBER_SUCCESS,
  REJECT_MEMBER_FAILURE,
  ALLOW_MEMBER_REQUEST,
  REJECT_MEMBER_REQUEST,
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
import {
  loadGroupList,
  loadWaitingList,
  loadGroupInfo,
  allowMember,
  rejectMember,
  loadHistoryList,
  loadGuestRecentTrends,
  loadHostRecentTrends,
} from "../libs/api/post";
import axios from "axios";

// saga

function* loadPostSaga(action) {
  // action.payload -> url 파라미터 뜻함

  console.log(action.payload); // yield call 에 payload 박으면 된다
  try {
    //const dummyPost = hostGroupData(10, 5); -> 데모때 필요
    // const dummyPost2 = guestGroupData();
    const res = yield call(loadGroupInfo, action.payload);
    console.log(res);

    yield put({ type: LOAD_POST_SUCCESS, groupDetail: res });
  } catch (error) {
    yield put({ type: LOAD_POST_FAILURE });
  }
}

function* loadGroupListSaga(action) {
  try {
    //const dummyPost = groupList(15);
    const res = yield call(loadGroupList, action.payload);

    yield put({ type: LOAD_GROUP_LIST_SUCCESS, groupList: res });
  } catch (error) {
    yield put({ type: LOAD_GROUP_LIST_FAILURE });
  }
}

function* loadWaitingListSaga(action) {
  try {
    //const dummyPost = waitingList(10);
    const res = yield call(loadWaitingList, action.payload);

    yield put({ type: LOAD_WAITING_LIST_SUCCESS, waitingList: res });
  } catch (error) {
    yield put({ type: LOAD_WAITING_LIST_FAILURE });
  }
}

function* loadGuestRecentTrendsSaga(action) {
  try {
    const dummyPost = createGuestRecentTrends();
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
    const dummyPost = createHostRecentTrends();
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
    const dummyPost = createHistoryList();

    // yield delay(100);
    const res = yield call(loadHistoryList, action.payload);
    console.log(res);
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
    // const dummyPost = createHistoryList();
    // console.log(action.payload);
    const res = yield call(allowMember, action.payload);
    console.log(res);
    // axios 요청 해야겠ㄷ네 다시

    yield put({
      type: ALLOW_MEMBER_SUCCESS,
      //groupDetail: res,
    });
  } catch (error) {
    yield put({ type: ALLOW_MEMBER_FAILURE });
  }
}

function* rejectMemberSaga(action) {
  try {
    // const dummyPost = createHistoryList();
    const res = yield call(rejectMember, action.payload);
    console.log(res);
    yield put({
      type: REJECT_MEMBER_SUCCESS,
      //groupDetail: res,
    });
  } catch (error) {
    yield put({ type: REJECT_MEMBER_FAILURE });
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
}
