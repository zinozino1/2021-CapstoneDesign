import React from "react";
import "./App.css";
import { Route, Switch, HashRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import History from "./pages/History";
import Main from "./pages/Main";
import GroupDetail from "./pages/GroupDetail";
import MyPage from "./pages/MyPage";

/**
 * @author 박진호
 * @version 1.0
 * @summary 페이지 라우팅 정의
 */

const App = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" component={Landing} exact={true}></Route>
          <Route path="/main" component={Main} exact={true}></Route>
          <Route path="/main/:id" component={GroupDetail}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/history" component={History}></Route>
          <Route path="/mypage" component={MyPage}></Route>
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
