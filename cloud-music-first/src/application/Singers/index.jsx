/*
 * @Author: xiewenhao
 * @Date: 2023-03-15 17:00:37
 * @LastEditTime: 2023-03-21 17:03:22
 * @Description:
 */
import React, { useEffect, useState } from "react";
import { categoryTypes, alphaTypes } from "../../api/contants";
import {
  getHotSingerList,
  refreshMoreHotSingerList,
  changePageCount,
} from "./store/actionCreators";
import { connect } from "react-redux";
import HorizenItem from "../../baseUI/horizen-item";
import SingList from "./components/SingList";
import { NavContainer } from "./style";
function Singers(props) {
  const {
    singerList,
    pullUpLoading,
    pullDownLoading,
    enterLoading,
    pageCount,
  } = props;
  console.log(pageCount);
  const { getHotSingerDispatch, pullUpRefreshDispatch } = props;
  let [category, setCategory] = useState("");
  let [alpha, setAlpha] = useState("");
  const handleUpdateCategory = (val) => {
    setCategory(val);
  };
  const handleUpdateAlpha = (val) => {
    setAlpha(val);
  };
  useEffect(() => {
    getHotSingerDispatch();
  }, []);
  const list = singerList ? singerList.toJS() : [];
  return (
    <div>
      <NavContainer>
        <HorizenItem
          title={"分类 (默认热门):"}
          list={categoryTypes}
          oldVal={category}
          handleClick={handleUpdateCategory}
        ></HorizenItem>
        <HorizenItem
          list={alphaTypes}
          title={"首字母:"}
          oldVal={alpha}
          handleClick={handleUpdateAlpha}
        ></HorizenItem>
      </NavContainer>
      <SingList
        list={list}
        pullUpRefreshDispatch={pullUpRefreshDispatch}
        pageCount={pageCount}
      ></SingList>
    </div>
  );
}
const mapStateToProps = (state) => ({
  singerList: state.getIn(["singers", "singerList"]),
  enterLoading: state.getIn(["singers", "enterLoading"]),
  pullUpLoading: state.getIn(["singers", "pullUpLoading"]),
  pullDownLoading: state.getIn(["singers", "pullDownLoading"]),
  pageCount: state.getIn(["singers", "pageCount"]),
});

const mapDispatchToProps = (dispatch) => {
  return {
    getHotSingerDispatch() {
      dispatch(getHotSingerList());
    },
    pullUpRefreshDispatch(count) {
      dispatch(changePageCount(count + 1));
      dispatch(refreshMoreHotSingerList());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Singers));
