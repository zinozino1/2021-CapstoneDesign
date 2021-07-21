import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainListItem from "./MainListItem";
import MainListIndex from "./MainListIndex";
import { Pagination } from "antd";
import { Link } from "react-router-dom";

/**
 * @author 박진호
 * @version 1.0
 * @summary 메인 화면 리스트 렌더링
 */

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

const MainList = ({ data, type }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState(data);

  const onChangePage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    let newData = data.slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5);
    setCurrentData(newData);
  }, [currentPage, data]);

  return (
    <>
      <MainListIndex type={type} />
      {type === "group"
        ? currentData.map((item, i) => (
            <LinkWrapper to={`/main/${item.id}`} key={i}>
              <MainListItem item={item} key={i} index={i}></MainListItem>
            </LinkWrapper>
          ))
        : currentData.map((item, i) => (
            <MainListItem item={item} key={i} index={i}></MainListItem>
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
