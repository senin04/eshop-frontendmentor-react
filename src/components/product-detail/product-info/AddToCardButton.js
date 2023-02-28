import styled from "styled-components";
import React from "react";

const Button = styled.button`
  margin-left: 15px;
  color: #fff;
  display: flex;
  padding: 20px 75px;
  background-color: hsl(26, 100%, 55%);
  align-items: center;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0px 5px 25px hsl(26, 100%, 55%);

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 17px;
    color: #fff;
    margin-right: 15px;
  }
  @media screen and (max-width: 900px) {
    margin: 0;
    justify-content: center;
  }
`;

function AddToCardButton({ onAddToCard, numberOfPieces }) {
  return (
    <Button
      onClick={() => {
        onAddToCard(numberOfPieces);
      }}
    >
      <img src="/images/icon-cart-white.svg" alt="" />
      <div>Add to cart</div>
    </Button>
  );
}

export default AddToCardButton;
