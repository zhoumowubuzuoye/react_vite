import styled from "styled-components";
import style from "../../../assets/global-style.js";
export const ListContainer = styled.div`
  position: fixed;
  top: 160px;
  overflow: hidden;
  width: 100%;
  left: 0;
  bottom: 0;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;
  padding: 5px 0;
  border-bottom: 1px solid ${style["border-color"]};
  .img_wrapper {
    margin-right: 20px;
    img {
      border-radius: 3px;
      width: 50px;
      height: 50px;
    }
  }
  .name {
    font-size: ${style["font-size-m"]};
    color: ${style["font-color-desc"]};
    font-weight: 500;
  }
`;
