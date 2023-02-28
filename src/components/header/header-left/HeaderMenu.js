import React from "react";
import HeaderMenuItem from "./HeaderMenuItem";
import styled from "styled-components";

const Menu = styled.ul`
  display: flex;
  margin-left: 20px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const HeaderMenu = () => {
  const menuData = ["Collections", "Man", "Woman", "About", "Contact"];

  return (
    <Menu>
      {menuData.map((oneItemName, index) => {
        return (
          <HeaderMenuItem
            key={index}
            oneItemName={oneItemName}
          ></HeaderMenuItem>
        );
      })}
    </Menu>
  );
};

export default HeaderMenu;
