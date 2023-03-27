/*
 * @Author: xiewenhao
 * @Date: 2023-03-15 17:00:37
 * @LastEditTime: 2023-03-27 16:55:54
 * @Description:
 */
import React, { useEffect, useState } from "react";
import { categoryTypes, alphaTypes } from "../../api/contants";
import {
  getHotSingerList,
  refreshMoreHotSingerList,
  changePageCount,
  getSingerList,
  changePullDownLoading,
  changePullUpLoading,
  changeEnterLoading,
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
  const {
    getHotSingerDispatch,
    pullUpRefreshDispatch,
    updateDispatch,
    pullDownRefreshDispatch,
  } = props;
  let [category, setCategory] = useState("");
  let [alpha, setAlpha] = useState("");
  const handleUpdateCategory = (val) => {
    setCategory(val);
    updateDispatch(val, alpha);
  };
  const handleUpdateAlpha = (val) => {
    setAlpha(val);
    updateDispatch(category, val);
  };
  useEffect(() => {
    getHotSingerDispatch();
  }, []);
  const list = singerList ? singerList.toJS() : [];
  console.log(pullUpLoading,50);
  return (
    <div>
      <NavContainer>
        <HorizenItem
          title={"分类 (默认热门):"}
          list={categoryTypes}
          oldVal={category}
          handleClick={(category) => handleUpdateCategory(category)}
        ></HorizenItem>
        <HorizenItem
          list={alphaTypes}
          title={"首字母:"}
          oldVal={alpha}
          handleClick={(alpha) => handleUpdateAlpha(alpha)}
        ></HorizenItem>
      </NavContainer>
      <SingList
        list={list}
        pullUpRefreshDispatch={pullUpRefreshDispatch}
        pullDownRefreshDispatch={pullDownRefreshDispatch}
        pageCount={pageCount}
        category={category}
        alpha={alpha}
        pullUpLoading={pullUpLoading}
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
      dispatch(changePullUpLoading(true));
      dispatch(getHotSingerList());
    },
    pullUpRefreshDispatch(count) {
      dispatch(changePullUpLoading(true));
      dispatch(changePageCount(count + 1));
      dispatch(refreshMoreHotSingerList());
    },
    updateDispatch(category, alpha) {
      dispatch(changePullUpLoading(true));
      dispatch(changePageCount(0));
      dispatch(getSingerList(category, alpha));
    },
    pullDownRefreshDispatch(category, alpha) {
      dispatch(changePageCount(0));
      if (category === "" && alpha === "") {
        dispatch(getHotSingerList());
      } else {
        dispatch(getSingerList(category, alpha));
      }
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Singers));
