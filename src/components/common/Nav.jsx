import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link, withRouter } from "react-router-dom";

const NavWrapper = styled.div`
  width: 200px;
  height: 100%;
  position: fixed;
  background: #aeb0d3;
  padding-top: 3%;
  a {
    color: #fff;
    font-size: 1.25rem;
  }
`;

const NavLink = styled.div`
  padding: 12px 30px;
  ${(props) =>
    props.currentMenu &&
    css`
      background: #f7f5fa;
      a {
        color: #aeb0d3;
      }
    `}
`;

const Nav = ({ history }) => {
  const [currentMenu, setCurrentMenu] = useState("Home");

  const onLogout = () => {
    localStorage.removeItem("user");
    history.push("/");
  };

  useEffect(() => {
    let currPath = history.location.pathname.slice(1);
    if (currPath.indexOf("/") !== -1) {
      currPath = currPath.slice(0, currPath.indexOf("/"));
    }
    //console.log(currPath);
    setCurrentMenu(currPath);
  }, [history]);

  return (
    <NavWrapper>
      <NavLink currentMenu={currentMenu === "main" && true}>
        <Link to="/main">Home</Link>
      </NavLink>
      <NavLink currentMenu={currentMenu === "history" && true}>
        <Link to="/history">History</Link>
      </NavLink>
      <NavLink currentMenu={currentMenu === "mypage" && true}>
        <Link to="/mypage">Mypage</Link>
      </NavLink>
      <NavLink>
        <div
          style={{ fontSize: "1.25rem", color: "#fff", cursor: "pointer" }}
          onClick={onLogout}
        >
          Logout
        </div>
      </NavLink>
    </NavWrapper>
  );
};

export default withRouter(Nav);
