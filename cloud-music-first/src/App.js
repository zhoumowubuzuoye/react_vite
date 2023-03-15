/*
 * @Author: xiewenhao
 * @Date: 2023-03-14 13:50:15
 * @LastEditTime: 2023-03-15 14:28:45
 * @Description:
 */
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter ,useRoutes} from "react-router-dom";
import { GlobalStyle } from "./style";
import { IconStyle } from "./assets/iconfont/iconfont";
import routes from "./routes";
import store from "./store";

const Routes = () =>{
  const routeArray = useRoutes(routes)
  return routeArray
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        <Routes></Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
