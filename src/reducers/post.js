import { createAction, handleActions } from "redux-actions";

// initial state

const initialState = {
  post: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
};

// action type

export const INITIALIZE_POST = "post/INITIALIZE_POST";

export const LOAD_POST_REQUEST = "post/LOAD_POST_REQUEST";
export const LOAD_POST_SUCCESS = "post/LOAD_POST_SUCCESS";
export const LOAD_POST_FAILURE = "post/LOAD_POST_FAILURE";

// action creator

export const initializePostAction = createAction(INITIALIZE_POST);

export const loadPostAction = createAction(LOAD_POST_REQUEST, (data) => data);

// reducer

const post = handleActions(
  {
    [INITIALIZE_POST]: (state, action) => ({
      ...state,
      post: null,
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
      post: action.post,
    }),
    [LOAD_POST_FAILURE]: (state, action) => ({
      ...state,
      loadPostLoading: false,
      loadPostDone: false,
      loadPostError: null,
    }),
  },
  initialState,
);

export default post;
