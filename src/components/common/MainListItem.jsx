import React from "react";
import styled, { css } from "styled-components";

const ItemWrapper = styled.div`
  display: flex;
  cursor: pointer;

  ${(props) =>
    props.index % 2 === 0 &&
    css`
      background: #f7f5fa;
    `}

  &:hover {
    opacity: 0.7;
  }
`;

const ColWrapper = styled.div`
  flex: 1;
  /* border: 1px solid red; */
  padding: 5px;
  text-align: center;
`;

const MainListItem = ({ item, index }) => {
  return (
    <ItemWrapper index={index}>
      <ColWrapper>{item.classRoomName}</ColWrapper>
      <ColWrapper>{item.classRoomCode}</ColWrapper>
      <ColWrapper>{item.status}</ColWrapper>
      <ColWrapper>{item.role}</ColWrapper>
    </ItemWrapper>
  );
};

export default MainListItem;
