/*
 * @Author: xiewenhao
 * @Date: 2023-03-14 17:57:22
 * @LastEditTime: 2023-03-15 11:08:51
 * @Description:
 */
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Top, Tab, TabItem } from "./style";
function Home(props) {
  return (
    <div>
      <Top>
        <span className="iconfont">&#xe601;</span>
        <span className="title">webapp</span>
        <span className="iconfont">&#xe608;</span>
      </Top>
      <Tab>
        <NavLink
          to="/recommend"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          <TabItem>
            <span>推荐</span>
          </TabItem>
        </NavLink>
        <NavLink to="/singers" className={({ isActive }) => (isActive ? "selected" : "")}>
          <TabItem>
            <span>歌手</span>
          </TabItem>
        </NavLink>
        <NavLink to="/rank" className={({ isActive }) => (isActive ? "selected" : "")}>
          <TabItem>
            <span>排行榜</span>
          </TabItem>
        </NavLink>
      </Tab>
      <Outlet></Outlet>
    </div>
  );
}

export default React.memo(Home);
