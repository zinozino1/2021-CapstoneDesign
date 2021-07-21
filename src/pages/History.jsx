import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ContentLayout from "../components/layout/ContentLayout";
import { Pagination } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadHistoryListRequestAction } from "../reducers/post";
import HistoryList from "../components/history/HistoryList";

/**
 * @author 박진호
 * @version 1.0
 * @summary 히스토리 페이지
 */

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
  const { me } = useSelector((state) => state.user);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState(historyList);

  const onChangePage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (me) {
      dispatch(loadHistoryListRequestAction(me.data.userId));
    }
  }, [me]);

  useEffect(() => {
    if (historyList) {
      let newData = historyList.slice(
        (currentPage - 1) * 5,
        (currentPage - 1) * 5 + 5,
      );
      setCurrentData(newData);
    }
  }, [currentPage, historyList]);

  if (!historyList || !currentData) return null;

  return (
    <ContentLayout>
      <HistoryWrapper>
        <HistoryList data={currentData} />
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
