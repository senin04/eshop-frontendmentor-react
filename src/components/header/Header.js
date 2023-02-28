import React from "react";
import styled from "styled-components";
import HeaderRight from "./header-right/HeaderRight";
import HeaderLeft from "./header-left/HeaderLeft";

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  border-bottom: 2px solid hsl(225, 11%, 93%);

  @media screen and (max-width: 900px) {
    margin: 15px auto;
    max-width: 340px;
    border: none;
  }
`;

function Header({ handleDeleteItem, piecesInCart }) {
  return (
    <HeaderContainer>
      <HeaderLeft />
      <HeaderRight
        onDeleteItem={handleDeleteItem}
        piecesInCart={piecesInCart}
      ></HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
