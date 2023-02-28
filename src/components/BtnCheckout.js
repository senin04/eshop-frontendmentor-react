import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
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
  width: 310px;
  justify-content: center;
  box-shadow: none;
  margin-bottom: 10px;

  @media screen and (max-width: 900px) {
    width: 340px;
  }
`;

function BtnCheckout() {
  return <StyledBtn>Checkout</StyledBtn>;
}

export default BtnCheckout;
