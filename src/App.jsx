import React, { useEffect, useRef, useState, useCallback } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import History from "./pages/History";
import Main from "./pages/Main";
import GroupDetail from "./pages/GroupDetail";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/2021-CapstoneDesign">
        <Switch>
          <Route path="/" component={Landing} exact></Route>
          <Route path="/main" component={Main}></Route>
          <Route path="/main/:id" component={GroupDetail}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/history" component={History}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
