/*
 * @Author: xiewenhao
 * @Date: 2023-03-20 15:43:18
 * @LastEditTime: 2023-03-21 11:17:14
 * @Description: '上部轮动'
 */
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import style from "../../assets/global-style.js";
import Scroll from "../../components/scroll";
import { ListItem, List } from "./style";

function Horzien(props) {
  const Catefory = useRef(null);
  const { list, oldVal, title } = props;
  const { handleClick } = props;
  useEffect(() => {
    let categoryDOM = Catefory.current;
    let TagElems = categoryDOM.querySelectorAll("span");
    let totalWidth = 0;
    Array.from(TagElems).forEach((item) => {
      totalWidth += item.offsetWidth;
    });
    categoryDOM.style.width = totalWidth + "px";
  }, []);
  return (
    <Scroll direction={"horizental"}>
      <div ref={Catefory}>
        <List>
          <span>{title}</span>
          {list.map((item) => {
            return (
              <ListItem
                key={item.key}
                onClick={() => {
                  handleClick(item.key);
                }}
                className={item.key === oldVal ? "selected" : ""}
              >
                {item.name}
              </ListItem>
            );
          })}
        </List>
      </div>
    </Scroll>
  );
}

Horzien.defaultProps = {
  list: [],
  oldVal: "",
  title: "",
  handleClick: null,
};

Horzien.propTypes = {
  list: PropTypes.array,
  oldVal: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.func,
};

export default React.memo(Horzien);
