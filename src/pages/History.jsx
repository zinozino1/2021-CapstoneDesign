import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ContentLayout from "../components/layout/ContentLayout";
import HistoryHeader from "../components/history/HistoryHeader";
import { Pagination } from "antd";
import { Link, withRouter } from "react-router-dom";

const HistoryWrapper = styled.div``;

const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
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

const LinkWrapper = styled(Link)`
  color: #000;
  &:hover {
    color: #000;
  }
`;

const History = () => {
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
    <ContentLayout>
      <HistoryWrapper>
        <HistoryHeader />
        <PaginationWrapper>
          <Pagination
            defaultCurrent={1}
            total={data.length}
            pageSize={5}
            onChange={onChangePage}
          />
        </PaginationWrapper>
      </HistoryWrapper>
    </ContentLayout>
  );
};

export default History;
