import React from "react";
import styled from "styled-components";

const OneLi = styled.li`
  position: relative;
  margin-left: 30px;
  overflow: hidden;
  border-bottom: 3px solid transparent;
  padding: 40px 0;
  transition: 0.1s;

  &:hover {
    border-bottom: 3px solid hsl(26, 100%, 55%);
  }
`;

const Href = styled.a`
  text-decoration: none;
  color: hsl(219, 9%, 45%);
  padding-bottom: 40px;
`;

const HeaderMenuItem = ({ oneItemName }) => {
  return (
    <OneLi>
      <Href href="#">{oneItemName}</Href>
    </OneLi>
  );
};

export default HeaderMenuItem;
