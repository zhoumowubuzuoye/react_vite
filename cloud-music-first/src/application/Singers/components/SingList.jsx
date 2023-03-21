import React from "react";
import { ListContainer, List, ListItem } from "./style";
import Scroll from "../../../components/scroll";
// import Loading from "../../../baseUI/loading";
const SingList = (props) => {
  const { list, pageCount } = props;
  const { pullUpRefreshDispatch } = props;
  return (
    <ListContainer>
      <Scroll pullUp={() => pullUpRefreshDispatch(pageCount)}>
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

export default React.memo(SingList);
