/*
 * @Author: xiewenhao
 * @Date: 2023-03-20 13:16:07
 * @LastEditTime: 2023-03-20 13:38:27
 * @Description:
 */
import * as actionTypes from "./constants";
import { fromJS } from "immutable";
import {
  getBannerRequest,
  getRecommendListRequest,
} from "../../../api/request";

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data),
});

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data),
});

export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data,
});

export const getBannerList = () => {
  return (distach) => {
    getBannerRequest()
      .then((res) => {
        distach(changeBannerList(res.banners));
      })
      .then(() => {
        console.log("数据问题");
      });
  };
};

export const getRecommendList = () => {
  return (distach) => {
    getRecommendListRequest()
      .then((res) => {
        distach(changeRecommendList(res.result));
        distach(changeEnterLoading(false));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
