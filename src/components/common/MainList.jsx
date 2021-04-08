import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainListItem from "./MainListItem";
import MainListIndex from "./MainListIndex";
import { Pagination } from "antd";

const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 0;

  left: 38.5%;
`;

const MainList = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState(data);

  const onChangePage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    let newData = data.slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5);
    setCurrentData(newData);
  }, [currentPage]);

  return (
    <>
      <MainListIndex />
      {currentData.map((item, i) => (
        <MainListItem item={item} key={i}></MainListItem>
      ))}
      <PaginationWrapper>
        <Pagination
          defaultCurrent={1}
          total={data.length}
          pageSize={5}
          onChange={onChangePage}
        />
      </PaginationWrapper>
    </>
  );
};

export default MainList;
