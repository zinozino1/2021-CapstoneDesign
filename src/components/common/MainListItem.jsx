import React from "react";
import styled, { css } from "styled-components";

const ItemWrapper = styled.div`
  display: flex;

  font-size: 0.75rem;
  padding: 3px 0;
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
      {item.enterCode ? (
        <ColWrapper>{item.name}</ColWrapper>
      ) : (
        <ColWrapper>{item.groupName}</ColWrapper>
      )}
      {item.enterCode && <ColWrapper>{item.enterCode}</ColWrapper>}
      <ColWrapper>{item.onAir ? "ON" : "OFF"}</ColWrapper>
      {item.role && <ColWrapper>{item.role}</ColWrapper>}
    </ItemWrapper>
  );
};

export default MainListItem;
