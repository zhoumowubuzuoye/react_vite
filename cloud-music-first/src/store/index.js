/*
 * @Author: xiewenhao
 * @Date: 2023-03-15 11:14:42
 * @LastEditTime: 2023-03-15 14:09:41
 * @Description:
 */
import { legacy_createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const devtool =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = legacy_createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store