import React from "react";
import HistoryListItem from "./HistoryListItem";

/**
 * @author 박진호
 * @version 1.0
 * @summary 히스토리 리스트 렌더링 컴포넌트
 */

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
