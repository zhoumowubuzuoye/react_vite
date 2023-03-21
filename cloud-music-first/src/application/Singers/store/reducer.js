/*
 * @Author: xiewenhao
 * @Date: 2023-03-21 14:36:55
 * @LastEditTime: 2023-03-21 16:04:02
 * @Description: 
 */
import { fromJS } from "immutable";
import * as actionTypes from "./constants";

const defaultState = fromJS({
  singerList: [],
  enterLoading: true,
  pullUPLoading: false,
  pullDownLoading: false,
  pageCount: 0,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set("enterLoading", action.data);
    case actionTypes.CHANGE_PAGE_COUNT:
      return state.set("pageCount", action.data);
    case actionTypes.CHANGE_PULLDOWN_LOADING:
      return state.set("pullDownLoading", action.data);
    case actionTypes.CHANGE_PULLUP_LOADING:
      return state.set("pullUPLoading", action.data);
    case actionTypes.CHANGE_SINGER_LIST:
      return state.set("singerList", action.data);
    default:
      return state;
  }
};
