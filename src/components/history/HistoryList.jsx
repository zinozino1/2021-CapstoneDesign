import React from "react";
import styled from "styled-components";
import HistoryListItem from "./HistoryListItem";
import { Link, withRouter } from "react-router-dom";

const LinkWrapper = styled(Link)`
  color: #000;
  &:hover {
    color: #000;
  }
`;

const HistoryList = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <LinkWrapper to={`/history/${item.id}`} key={i}>
          <HistoryListItem key={i} item={item} idx={i}></HistoryListItem>
        </LinkWrapper>
      ))}
    </>
  );
};

export default HistoryList;
