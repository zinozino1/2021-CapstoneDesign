import { combineReducers } from "redux";
import post from "./post";
import user from "./user";

/**
 * @author 박진호
 * @version 1.0
 * @summary 루트 리듀서 정의
 */

const rootReducer = combineReducers({
  post,
  user,
});

export default rootReducer;
