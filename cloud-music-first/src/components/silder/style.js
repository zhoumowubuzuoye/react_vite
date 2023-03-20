/*
 * @Author: xiewenhao
 * @Date: 2023-03-15 17:00:37
 * @LastEditTime: 2023-03-20 11:21:46
 * @Description: 
 */
import styled from "styled-components";
import style from "../../assets/global-style.js";

export const SliderContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
  .before {
    position: absolute;
    top: -300px;
    height: 400px;
    width: 100%;
    background: ${style["theme-color"]};
  }
  .swiper-wrapper {
    width: 98%;
    margin: 0 auto;
    height: 160px;
    .swiper {
      border-radius: 6px;
    }
  }
  .swiper-pagination-bullet-active {
      background: ${style["theme-color"]};
    }
`;
