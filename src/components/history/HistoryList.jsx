import React from "react";
import styled from "styled-components";
import HistoryListItem from "./HistoryListItem";

const HistoryList = ({ data }) => {
  return (
    <>
      {data.map((item, i) => {
        return <HistoryListItem key={i} item={item} idx={i}></HistoryListItem>;
      })}
    </>
  );
};

export default HistoryList;
