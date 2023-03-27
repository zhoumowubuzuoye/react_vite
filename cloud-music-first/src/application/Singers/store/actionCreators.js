/*
 * @Author: xiewenhao
 * @Date: 2023-03-21 14:37:20
 * @LastEditTime: 2023-03-27 17:23:38
 * @Description:
 */

import {
  getHotSingerListRequest,
  getSingerListRequest,
} from "../../../api/request";
import {
  CHANGE_ENTER_LOADING,
  CHANGE_PULLDOWN_LOADING,
  CHANGE_SINGER_LIST,
  CHANGE_PULLUP_LOADING,
  CHANGE_PAGE_COUNT,
} from "./constants";

import { fromJS } from "immutable";

const changeSingerList = (data) => ({
  type: CHANGE_SINGER_LIST,
  data: fromJS(data),
});

export const changePageCount = (data) => ({
  type: CHANGE_PAGE_COUNT,
  data,
});

export const changePullDownLoading = (data) => {
  return {
    type: CHANGE_PULLDOWN_LOADING,
    data,
  };
};

export const changePullUpLoading = (data) => {
  console.log(data);
  return({
    type: CHANGE_PULLUP_LOADING,
    data,
  });
}

export const changeEnterLoading = (data) => ({
  type: CHANGE_ENTER_LOADING,
  data,
});

export const getHotSingerList = () => {
  return (dispatch) => {
    getHotSingerListRequest(0).then((res) => {
      dispatch(changePullUpLoading(false))
      const data = res.artists;
      dispatch(changeSingerList(data));
    });
  };
};

export const refreshMoreHotSingerList = () => {
  return (dispatch, getState) => {
    const pageCount = getState().getIn(["singers", "pageCount"]);
    const singerList = getState().getIn(["singers", "singerList"]).toJS();
    getHotSingerListRequest(pageCount).then((res) => {
      dispatch(changePullUpLoading(false))
      const data = [...singerList, ...res.artists];
      dispatch(changeSingerList(data));
    });
  };
};

export const getSingerList = (category, alpha) => {
  return (dispatch, getState) => {
    getSingerListRequest(category, alpha, 0).then((res) => {
      const data = res.artists;
      dispatch(changeSingerList(data));
    });
  };
};
