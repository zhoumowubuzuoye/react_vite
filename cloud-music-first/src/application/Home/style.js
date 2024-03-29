import styled from "styled-components";
import style from "../../assets/global-style.js";

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${style["theme-color"]};
  & > span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
`;

export const Tab = styled.div`
  height: 44px;
  display: flex;
  justify-content: space-around;
  background: ${style["theme-color"]};
  a {
    flex: 1;
    padding: 2px 0px;
    font-size: 14px;
    color: #e4e4e4;
    &.selected {
      span {
        border-bottom: 2px solid #f1f1f1;
        padding: 3px 0;
        font-weight: 700;
        color: #f1f1f1;
      }
    }
  }
`;

export const TabItem = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
