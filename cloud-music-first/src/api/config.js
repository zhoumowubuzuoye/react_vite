/*
 * @Author: xiewenhao
 * @Date: 2023-03-20 13:08:30
 * @LastEditTime: 2023-03-20 14:38:14
 * @Description: 
 */
import axios from "axios";

export const baseUrl = "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL:baseUrl
});

axiosInstance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err, "网路错误");
  }
);

export { axiosInstance };
