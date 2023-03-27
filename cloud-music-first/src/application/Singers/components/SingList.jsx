/*
 * @Author: xiewenhao
 * @Date: 2023-03-21 17:17:09
 * @LastEditTime: 2023-03-27 16:58:39
 * @Description:
 */
import React from "react";
import { ListContainer, List, ListItem } from "./style";
import Scroll from "../../../components/scroll";
import PropTypes from "prop-types";
// import Loading from "../../../baseUI/loading";
const SingList = (props) => {
  const { list, pageCount, category, alpha, pullUpLoading } = props;
  const { pullUpRefreshDispatch, pullDownRefreshDispatch } = props;
  return (
    <ListContainer>
      <Scroll
        pullUp={() => pullUpRefreshDispatch(pageCount)}
        pullDown={() => pullDownRefreshDispatch(category, alpha)}
        pullUpLoading={pullUpLoading}
      >
        {/* <Loading></Loading> */}
        <List>
          {list.map((item, index) => {
            return (
              <ListItem key={index}>
                <div className="img_wrapper">
                  <img
                    src={`${item.picUrl}?param=300*300`}
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>
                <span className="name">{item.name}</span>
              </ListItem>
            );
          })}
        </List>
      </Scroll>
    </ListContainer>
  );
};

SingList.prototype = {
  list: PropTypes.array,
  pageCount: PropTypes.number,
  pullUpRefreshDispatch: PropTypes.func,
  pullDownRefreshDispatch: PropTypes.func,
  category: PropTypes.string,
  alpha: PropTypes.alpha,
  pullUpLoading: PropTypes.bool,
};

export default React.memo(SingList);
