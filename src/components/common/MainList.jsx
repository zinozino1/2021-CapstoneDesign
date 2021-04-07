import React from "react";
import MainListItem from "./MainListItem";

const MainList = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <MainListItem item={item} key={i}></MainListItem>
      ))}
    </>
  );
};

export default MainList;
