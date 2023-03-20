/*
 * @Author: xiewenhao
 * @Date: 2023-03-15 17:00:37
 * @LastEditTime: 2023-03-20 14:08:28
 * @Description:
 */
import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../application/Recommend/store/index";
export default combineReducers({
  recommend: recommendReducer,
});
