/*
 * @Author: xiewenhao
 * @Date: 2023-03-20 13:13:40
 * @LastEditTime: 2023-03-21 14:35:45
 * @Description: 
 */
import { axiosInstance } from "./config";

// 获取流行头部banner
export const getBannerRequest = () => {
  return axiosInstance.get("/banner");
};

// 获取流行简介
export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};

/**
 * @descption 获取人气歌手
 * @param {*} count 
 * @returns 
 */
export const getHotSingerListRequest = (count) => {
  return axiosInstance.get(`top/artists?offset=${count}`);
};

/**
 * 获取人气歌手列表
 * @param {*} category 
 * @param {*} alpha 
 * @param {*} count 
 * @returns 
 */
export const getSingerListRequest = (category, alpha, count) => {
  return axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
  );
};
