import React from "react";
import styled from "styled-components";
import Cart from "./Cart";
import Avatar from "./Avatar";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

function HeaderRight({ piecesInCart, onDeleteItem }) {
  return (
    <Container>
      <Cart onDeleteItem={onDeleteItem} piecesInCart={piecesInCart}></Cart>
      <Avatar></Avatar>
    </Container>
  );
}

export default HeaderRight;
