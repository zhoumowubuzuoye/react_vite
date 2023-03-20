/*
 * @Author: xiewenhao
 * @Date: 2023-03-20 15:13:39
 * @LastEditTime: 2023-03-20 15:21:33
 * @Description:
 */
import React from "react";
import styled, { keyframes } from "styled-components";
import style from "../../assets/global-style.js";

const loading = keyframes`
    0%,100%{
        transform:scale(0.0)
    }
    50%{
        transform:scale(1.0)
    }
`;

const LoadingWrapper = styled.div`
  > div {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    opacity: 0.6;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: ${style["theme-color"]};
    animation: ${loading} 1.4s infinite ease-in;
  }
  > div:nth-child(2) {
    animation-delay: -0.7s;
  }
`;
function Loading() {
  return (
    <LoadingWrapper>
      <div></div>
      <div></div>
    </LoadingWrapper>
  );
}

export default React.memo(Loading)
