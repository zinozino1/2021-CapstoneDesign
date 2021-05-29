import { createAction, handleActions } from "redux-actions";

// initial state

const initialState = {
  groupDetail: null,
  groupList: null,
  waitingList: null,
  guestRecentTrends: null,
  hostRecentTrends: null,
  historyList: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadGroupListLoading: false,
  loadGroupListDone: false,
  loadGroupListError: null,
  loadWaitingListLoading: false,
  loadWaitingListDone: false,
  loadWaitingListError: null,
  loadHistoryListLoading: false,
  loadHistoryListDone: false,
  loadHistoryListError: null,
};

// action type

export const INITIALIZE_POST = "post/INITIALIZE_POST";

export const INITIALIZE_GROUP_AND_WAITING_LIST =
  "post/INITIALIZE_GROUP_AND_WAITING_LIST";

export const LOAD_POST_REQUEST = "post/LOAD_POST_REQUEST";
export const LOAD_POST_SUCCESS = "post/LOAD_POST_SUCCESS";
export const LOAD_POST_FAILURE = "post/LOAD_POST_FAILURE";

export const LOAD_GROUP_LIST_REQUEST = "post/LOAD_GROUP_LIST_REQUEST";
export const LOAD_GROUP_LIST_SUCCESS = "post/LOAD_GROUP_LIST_SUCCESS";
export const LOAD_GROUP_LIST_FAILURE = "post/LOAD_GROUP_LIST_FAILURE";

export const LOAD_WAITING_LIST_REQUEST = "post/LOAD_WAITING_LIST_REQUEST";
export const LOAD_WAITING_LIST_SUCCESS = "post/LOAD_WAITING_LIST_SUCCESS";
export const LOAD_WAITING_LIST_FAILURE = "post/LOAD_WAITING_LIST_FAILURE";

export const LOAD_GUEST_RECENT_TRENDS_REQUEST =
  "post/LOAD_GUEST_RECENT_TRENDS_REQUEST";
export const LOAD_GUEST_RECENT_TRENDS_SUCCESS =
  "post/LOAD_GUEST_RECENT_TRENDS_SUCCESS";
export const LOAD_GUEST_RECENT_TRENDS_FAILURE =
  "post/LOAD_GUEST_RECENT_TRENDS_FAILURE";

export const LOAD_HOST_RECENT_TRENDS_REQUEST =
  "post/LOAD_HOST_RECENT_TRENDS_REQUEST";
export const LOAD_HOST_RECENT_TRENDS_SUCCESS =
  "post/LOAD_HOST_RECENT_TRENDS_SUCCESS";
export const LOAD_HOST_RECENT_TRENDS_FAILURE =
  "post/LOAD_HOST_RECENT_TRENDS_FAILURE";

export const LOAD_HISTORY_LIST_REQEUST = "post/LOAD_HISTORY_LIST_REQEUST";
export const LOAD_HISTORY_LIST_SUCCESS = "post/LOAD_HISTORY_LIST_SUCCESS";
export const LOAD_HISTORY_LIST_FAILURE = "post/LOAD_HISTORY_LIST_FAILURE";

export const ALLOW_MEMBER_REQUEST = "post/ALLOW_MEMBER_REQUEST";
export const ALLOW_MEMBER_SUCCESS = "post/ALLOW_MEMBER_SUCCESS";
export const ALLOW_MEMBER_FAILURE = "post/ALLOW_MEMBER_FAILURE";

export const REJECT_MEMBER_REQUEST = "post/REJECT_MEMBER_REQUEST";
export const REJECT_MEMBER_SUCCESS = "post/REJECT_MEMBER_SUCCESS";
export const REJECT_MEMBER_FAILURE = "post/REJECT_MEMBER_FAILURE";

export const EXIT_GROUP_REQUEST = "post/EXIT_GROUP_REQUEST";
export const EXIT_GROUP_SUCCESS = "post/EXIT_GROUP_SUCCESS";
export const EXIT_GROUP_FAILURE = "post/EXIT_GROUP_FAILURE";

export const WAITING_TO_GROUP = "post/WAITING_TO_GROUP";

export const WAITING_TO_NONE = "post/WAITING_TO_NONE";

export const JOIN_TO_WAITING = "post/JOIN_TO_WAITING";

export const LOAD_INTERVAL_GROUPLIST = "post/LOAD_INTERVAL_GROUPLIST";
export const LOAD_INTERVAL_GROUPLIST_SUCCESS =
  "post/LOAD_INTERVAL_GROUPLIST_SUCCESS";

export const LOAD_INTERVAL_WAITINGLIST = "post/LOAD_INTERVAL_WAITINGLIST";
export const LOAD_INTERVAL_WAITINGLIST_SUCCESS =
  "post/LOAD_INTERVAL_WAITINGLIST_SUCCESS";

export const LOAD_WAITING_MEMBER = "post/LOAD_WAITING_MEMBER";
export const LOAD_WAITING_MEMBER_SUCCESS = "post/LOAD_WAITING_MEMBER_SUCCESS";

// action creator

export const initializePostAction = createAction(INITIALIZE_POST);

export const initializeGroupAndWaitingList = createAction(
  INITIALIZE_GROUP_AND_WAITING_LIST,
);

export const loadPostAction = createAction(LOAD_POST_REQUEST, (data) => data);

export const loadGroupListRequestAction = createAction(
  LOAD_GROUP_LIST_REQUEST,
  (data) => data,
);

export const loadWaitingListRequestAction = createAction(
  LOAD_WAITING_LIST_REQUEST,
  (data) => data,
);

export const loadGuestRecentTrendsRequestAction = createAction(
  LOAD_GUEST_RECENT_TRENDS_REQUEST,
);

export const loadHostRecentTrendsRequestAction = createAction(
  LOAD_HOST_RECENT_TRENDS_REQUEST,
);

export const loadHistoryListRequestAction = createAction(
  LOAD_HISTORY_LIST_REQEUST,
);

export const allowMemberRequestAction = createAction(
  ALLOW_MEMBER_REQUEST,
  (data) => data,
);

export const rejectMemberRequestAction = createAction(
  REJECT_MEMBER_REQUEST,
  (data) => data,
);

export const exitGroup = createAction(EXIT_GROUP_REQUEST, (data) => data);

export const waitingToGroup = createAction(WAITING_TO_GROUP, (data) => data);

export const waitingToNone = createAction(WAITING_TO_NONE, (data) => data);

export const joinToWaiting = createAction(JOIN_TO_WAITING, (data) => data);

export const loadIntervalGroupList = createAction(
  LOAD_INTERVAL_GROUPLIST,
  (data) => data,
);

export const loadIntervalWaitingList = createAction(
  LOAD_INTERVAL_WAITINGLIST,
  (data) => data,
);

export const loadWaitingMember = createAction(
  LOAD_WAITING_MEMBER,
  (data) => data,
);

// reducer

const post = handleActions(
  {
    [INITIALIZE_POST]: (state, action) => ({
      ...state,
      groupDetail: null,
    }),
    [INITIALIZE_GROUP_AND_WAITING_LIST]: (state, action) => ({
      ...state,
      groupList: null,
      waitingList: null,
    }),
    [LOAD_POST_REQUEST]: (state, action) => ({
      ...state,
      loadPostLoading: true,
      loadPostDone: false,
      loadPostError: null,
    }),
    [LOAD_POST_SUCCESS]: (state, action) => ({
      ...state,
      loadPostLoading: false,
      loadPostDone: true,
      loadPostError: null,
      groupDetail: action.groupDetail,
    }),
    [LOAD_POST_FAILURE]: (state, action) => ({
      ...state,
      loadPostLoading: false,
      loadPostDone: false,
      loadPostError: null,
    }),
    [LOAD_GROUP_LIST_REQUEST]: (state, action) => ({
      ...state,
      loadGroupListLoading: true,
      loadGroupListDone: false,
      loadGroupListError: null,
    }),
    [LOAD_GROUP_LIST_SUCCESS]: (state, action) => ({
      ...state,
      loadGroupListLoading: false,
      loadGroupListDone: true,
      loadGroupListError: null,
      groupList: action.groupList,
    }),
    [LOAD_GROUP_LIST_FAILURE]: (state, action) => ({
      ...state,
      loadGroupListLoading: false,
      loadGroupListDone: false,
      loadGroupListError: null,
    }),
    [LOAD_WAITING_LIST_REQUEST]: (state, action) => ({
      ...state,
      loadWaitingListLoading: true,
      loadWaitingListDone: false,
      loadWaitingListError: null,
    }),
    [LOAD_WAITING_LIST_SUCCESS]: (state, action) => ({
      ...state,
      loadWaitingListLoading: false,
      loadWaitingListDone: true,
      loadWaitingListError: null,
      waitingList: action.waitingList,
    }),
    [LOAD_WAITING_LIST_FAILURE]: (state, action) => ({
      ...state,
      loadWaitingListLoading: false,
      loadWaitingListDone: false,
      loadWaitingListError: null,
    }),
    [LOAD_GUEST_RECENT_TRENDS_REQUEST]: (state, action) => ({
      ...state,
    }),
    [LOAD_GUEST_RECENT_TRENDS_SUCCESS]: (state, action) => ({
      ...state,
      guestRecentTrends: action.guestRecentTrends,
    }),
    [LOAD_GUEST_RECENT_TRENDS_FAILURE]: (state, action) => ({
      ...state,
    }),
    [LOAD_HOST_RECENT_TRENDS_REQUEST]: (state, action) => ({
      ...state,
    }),
    [LOAD_HOST_RECENT_TRENDS_SUCCESS]: (state, action) => ({
      ...state,
      hostRecentTrends: action.hostRecentTrends,
    }),
    [LOAD_HOST_RECENT_TRENDS_FAILURE]: (state, action) => ({
      ...state,
    }),
    [LOAD_HISTORY_LIST_REQEUST]: (state, action) => ({
      ...state,
      loadHistoryListLoading: true,
      loadHistoryListDone: false,
      loadHistoryListError: null,
    }),
    [LOAD_HISTORY_LIST_SUCCESS]: (state, action) => ({
      ...state,
      loadHistoryListLoading: false,
      loadHistoryListDone: true,
      loadHistoryListError: null,
      historyList: action.historyList,
    }),
    [LOAD_HISTORY_LIST_FAILURE]: (state, action) => ({
      ...state,
      loadHistoryListLoading: false,
      loadHistoryListDone: false,
      loadHistoryListError: null,
    }),
    [ALLOW_MEMBER_REQUEST]: (state, action) => ({
      ...state,
    }),
    [ALLOW_MEMBER_SUCCESS]: (state, action) => ({
      ...state,
      // groupDetail: {
      //   ...state.groupDetail,
      //   data: {
      //     ...state.groupDetail.data,
      //     groupMemberSimpleDtoList:
      //       action.groupDetail.data.groupMemberSimpleDtoList,
      //   },
      // },
    }),
    [ALLOW_MEMBER_FAILURE]: (state, action) => ({
      ...state,
    }),
    [REJECT_MEMBER_REQUEST]: (state, action) => ({
      ...state,
    }),
    [REJECT_MEMBER_SUCCESS]: (state, action) => ({
      ...state,
      // groupDetail: {
      //   ...state.groupDetail,
      //   data: {
      //     ...state.groupDetail.data,
      //     waitingMemberDtoList: action.groupDetail.data.waitingMemberDtoList,
      //   },
      // },
    }),
    [REJECT_MEMBER_FAILURE]: (state, action) => ({
      ...state,
    }),
    [WAITING_TO_GROUP]: (state, action) => {
      console.log(action);
      return {
        ...state,
        groupDetail: {
          ...state.groupDetail,
          data: {
            ...state.groupDetail.data,
            groupMemberSimpleDtoList: [
              ...state.groupDetail.data.groupMemberSimpleDtoList,
            ].concat({
              name: action.payload.name,
              email: action.payload.userEmail,
            }),
          },
        },
      };
    },
    [WAITING_TO_NONE]: (state, action) => ({
      ...state,
      groupDetail: {
        ...state.groupDetail,
        data: {
          ...state.groupDetail.data,
          waitingMemberDtoList: [
            ...state.groupDetail.data.waitingMemberDtoList,
          ].filter((v, i) => {
            if (v.email !== action.payload.userEmail) {
              return { ...v };
            }
          }),
        },
      },
    }),
    [JOIN_TO_WAITING]: (state, action) => ({
      ...state,
      waitingList: {
        ...state.waitingList,
        data: [...state.waitingList.data].concat({
          id: 1,
          groupName: action.payload.groupName,
          groupId: 1,
          waitingStatus: "WAIT",
        }),
      },
    }),
    [LOAD_INTERVAL_GROUPLIST_SUCCESS]: (state, action) => {
      return {
        ...state,
        groupList: {
          ...state.groupList,
          data: action.res,
        },
      };
    },
    [LOAD_INTERVAL_WAITINGLIST_SUCCESS]: (state, action) => {
      return {
        ...state,
        waitingList: {
          ...state.waitingList,
          data: action.res,
        },
      };
    },
    [LOAD_WAITING_MEMBER_SUCCESS]: (state, action) => ({
      ...state,
      groupDetail: {
        ...state.groupDetail,
        data: {
          ...state.groupDetail.data,
          waitingMemberDtoList: action.res,
        },
      },
    }),
  },
  initialState,
);

export default post;
