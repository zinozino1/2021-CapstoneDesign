import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ContentLayout from "../components/layout/ContentLayout";
import HistoryHeader from "../components/history/HistoryHeader";
import { Pagination } from "antd";
import { Link, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadHistoryListRequestAction } from "../reducers/post";
import HistoryList from "../components/history/HistoryList";

const HistoryWrapper = styled.div``;

const PaginationWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
  .ant-pagination {
    .ant-pagination-item {
      &:hover {
        border: 1px solid #aeb0d3;
      }
      a {
        font-weight: 600;
        color: #aeb0d3;
      }
    }
    .ant-pagination-item-active {
      border-color: #aeb0d3;
      background-color: #aeb0d3;

      a {
        color: #fff;
      }
    }
    .ant-pagination-item-link {
      &:hover {
        border-color: #aeb0d3;
        color: #aeb0d3;
      }
    }
  }
`;

const History = () => {
  const dispatch = useDispatch();
  const { historyList } = useSelector((state) => state.post);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState(historyList);

  const onChangePage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(loadHistoryListRequestAction());
  }, []);

  useEffect(() => {
    if (historyList) {
      let newData = historyList.slice(
        (currentPage - 1) * 5,
        (currentPage - 1) * 5 + 5,
      );
      setCurrentData(newData);
    }
  }, [currentPage, historyList]);

  useEffect(() => {
    console.log(currentData);
  }, [currentData]);

  if (!historyList || !currentData) return null;

  return (
    <ContentLayout>
      <HistoryWrapper>
        <HistoryHeader />
        <HistoryList data={currentData} />
        {/* {currentData &&
          currentData.map((item, i) => <div key={i}>{item.groupName}</div>)} */}
        <PaginationWrapper>
          <Pagination
            defaultCurrent={1}
            total={historyList.length}
            pageSize={5}
            onChange={onChangePage}
          />
        </PaginationWrapper>
      </HistoryWrapper>
    </ContentLayout>
  );
};

export default History;
