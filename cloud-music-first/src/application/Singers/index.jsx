/*
 * @Author: xiewenhao
 * @Date: 2023-03-15 17:00:37
 * @LastEditTime: 2023-03-20 17:07:53
 * @Description:
 */
import React from "react";
import HorizenItem from "../../baseUI/horizen-item";
import {NavContainer} from './style'
import { categoryTypes, alphaTypes } from "../../api/contants";
function Singers(props) {
  return (
    <NavContainer>
      <HorizenItem title={"分类 (默认热门):"} list={categoryTypes}></HorizenItem>
      <HorizenItem list={alphaTypes} title={"首字母:"}></HorizenItem>
    </NavContainer>
  );
}
export default React.memo(Singers);
