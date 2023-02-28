import React from "react";
import styled from "styled-components";

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 10px;
  background-color: hsl(26, 100%, 55%);
  transform: translate(40%, -50%);
  border-radius: 8px;
  text-decoration: none;
`;

function ItemsCounter({ piecesInCart }) {
  return <Counter>{piecesInCart}</Counter>;
}

export default ItemsCounter;
