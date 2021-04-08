import React from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

const ColWrapper = styled.div`
  flex: 1;
  border: 1px solid red;
  padding: 5px;
  text-align: center;
`;

const MainListItem = ({ item }) => {
  return (
    <ItemWrapper>
      <ColWrapper>{item.classRoomName}</ColWrapper>
      <ColWrapper>{item.classRoomCode}</ColWrapper>
      <ColWrapper>{item.status}</ColWrapper>
      <ColWrapper>{item.role}</ColWrapper>
    </ItemWrapper>
  );
};

export default MainListItem;
