/*
 * @Author: xiewenhao
 * @Date: 2023-03-15 16:54:45
 * @LastEditTime: 2023-03-20 15:07:43
 * @Description:
 */
import React from "react";
import LazyLoad from "react-lazyload";
import { getCount } from "../../api/utils";
import { ListWrapper, List, ListItem } from "./style";

export default function RecommendList(props) {
  const { recommendList } = props;
  return (
    <ListWrapper>
      <h1 className="title">推荐歌单</h1>
      <List>
        {recommendList.map((item, index) => {
          return (
            <ListItem key={item.id + index}>
              <div className="img_wrapper">
                <div className="decorate"></div>
                <LazyLoad
                  placeholder={
                    <img
                      width="100%"
                      height="100%"
                      src={require("./music.png")}
                      alt="music"
                    />
                  }
                >
                  <img
                    src={item.picUrl + "?param=300*300"}
                    width="100%"
                    height="100%"
                    alt="music"
                  />
                </LazyLoad>
                <div className="play_count">
                  <i className="iconfont">&#xe607;</i>
                  <span className="count">{getCount(item.playCount)}</span>
                </div>
              </div>
              <div className="desc">{item.name}</div>
            </ListItem>
          );
        })}
      </List>
    </ListWrapper>
  );
}
