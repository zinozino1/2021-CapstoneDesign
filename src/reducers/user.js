import { createAction, handleActions } from "redux-actions";

/**
 * @author 박진호
 * @version 1.0
 * @summary 유저 관련 액션,리듀서 정의
 */

// initial state

const initialState = {
  me: null,
  loginLoading: false,
  loginDone: false,
  loginError: null,
  logoutLoading: false,
  logoutDone: false,
  logoutError: null,
  registerLoading: false,
  registerSuccess: false,
  registerFailure: null,
};

// action type

export const SET_USER_REQUEST = "user/SET_USER_REQUEST";
export const SET_USER_SUCCESS = "user/SET_USER_SUCCESS";
export const SET_USER_FAILURE = "user/SET_USER_FAILURE";

export const LOG_IN_REQUEST = "user/LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "user/LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "user/LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "user/LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "user/LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "user/LOG_OUT_FAILURE";

export const REGISTER_REQUEST = "user/REGISTER_REQUEST";
export const REGISTER_SUCCESS = "user/REGISTER_SUCCESS";
export const REGISTER_FAILURE = "user/REGISTER_FAILURE";

// action creator

export const setUserRequestAction = createAction(
  SET_USER_REQUEST,
  (data) => data,
);

export const loginRequestAction = createAction(LOG_IN_REQUEST, (data) => data);

export const logoutRequestAction = createAction(LOG_OUT_REQUEST);

export const registerRequestAction = createAction(
  REGISTER_REQUEST,
  (data) => data,
);

// reducer

const user = handleActions(
  {
    [SET_USER_REQUEST]: (state, action) => ({
      ...state,
      setUserLoading: true,
      setUserDone: false,
      setUserFalse: null,
    }),
    [SET_USER_SUCCESS]: (state, action) => ({
      ...state,
      setUserLoading: false,
      setUserDone: true,
      setUserFalse: null,
      me: action.me,
    }),
    [SET_USER_FAILURE]: (state, action) => ({
      ...state,
      setUserLoading: false,
      setUserDone: false,
      setUserFalse: null,
    }),
    [LOG_IN_REQUEST]: (state, action) => ({
      ...state,
      loginLoading: true,
      loginDone: false,
      loginError: null,
    }),
    [LOG_IN_SUCCESS]: (state, action) => ({
      ...state,
      loginLoading: false,
      loginDone: true,
      loginError: null,
      me: action.me,
    }),
    [LOG_IN_FAILURE]: (state, action) => ({
      ...state,
      loginLoading: false,
      loginDone: false,
      loginError: action.error,
    }),
    [LOG_OUT_REQUEST]: (state, action) => ({
      ...state,
      logoutLoading: true,
      logoutDone: false,
      logoutError: null,
      me: null,
    }),
    [LOG_OUT_SUCCESS]: (state, action) => ({
      ...state,
      logoutLoading: false,
      logoutDone: true,
      logoutError: null,
      me: null,
    }),
    [LOG_OUT_FAILURE]: (state, action) => ({
      ...state,
      logoutLoading: false,
      logoutDone: false,
      logoutError: action.error,
    }),
    // -> deprecated
    [REGISTER_REQUEST]: (state, action) => ({
      ...state,
      registerLoading: true,
      registerSuccess: false,
      registerFailure: null,
    }),
    [REGISTER_SUCCESS]: (state, action) => ({
      ...state,
      registerLoading: false,
      registerSuccess: true,
      registerFailure: null,
    }),
    [REGISTER_FAILURE]: (state, action) => ({
      ...state,
      registerLoading: false,
      registerSuccess: false,
      registerFailure: null,
    }),
  },
  initialState,
);

export default user;
