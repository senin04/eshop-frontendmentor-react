import React from "react";
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;

  img {
    padding-bottom: 5px;
  }
`;

const Hamburger = styled.a`
  margin-right: 15px;
  padding-top: 7px;
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
  }
`;

const HeaderLeft = () => {
  return (
    <StyledHeader>
      <Hamburger>
        <img src="images/icon-menu.svg" alt="" />
      </Hamburger>
      <img src="images/logo.svg" alt="" />
      <HeaderMenu></HeaderMenu>
    </StyledHeader>
  );
};

export default HeaderLeft;
