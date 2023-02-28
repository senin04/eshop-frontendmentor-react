import { useState, useRef } from "react";
import styled from "styled-components";
import CartItems from "./CartItems";
import BtnCheckout from "../../BtnCheckout";
import useOnClickOutside from "../../../hooks/useOnclickOutside";
import ItemsCounter from "./ItemsCounter";

const StyledCart = styled.a`
  background-image: url("images/icon-cart.svg");
  background-size: contain;
  width: 22px;
  height: 20px;
  text-decoration: none;

  &:hover {
    background-image: url("images/icon-cart-black.svg") !important;
  }

  .cart-text {
    font-weight: 700;
    padding-bottom: 20px;
    border-bottom: 2px solid hsl(225, 11%, 93%);
    margin-bottom: 20px;
  }
`;

const StyledBlackCart = styled(StyledCart)`
  background-image: url("images/icon-cart-black.svg");
  cursor: pointer;
  transition: 0ms;
`;

const StyledOpenCart = styled.div`
  color: hsl(220, 13%, 13%);
  z-index: 1;
  position: absolute;
  width: 360px;
  min-height: 237px;
  padding: 20px;
  top: 100px;
  right: -50px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 10px 20px -10px;

  @media screen and (max-width: 1250px) {
    padding: 20px;
    top: 100px;
    right: 0;
  }
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width: 380px;
    padding: 20px;
    top: 60px;
    right: -20px;
  }
`;

const StyledLi = styled.li`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

function Cart({ piecesInCart, onDeleteItem }) {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  if (piecesInCart === 0) {
    return (
      <>
        {isModalOpen ? (
          <StyledBlackCart>
            <StyledOpenCart ref={ref}>
              <div className="cart-text">Cart</div>
              <StyledLi>Your cart is empty</StyledLi>
            </StyledOpenCart>
          </StyledBlackCart>
        ) : (
          <StyledCart onClick={() => setModalOpen(true)} href="#"></StyledCart>
        )}
      </>
    );
  } else {
    return (
      <>
        {isModalOpen ? (
          <StyledBlackCart>
            <ItemsCounter piecesInCart={piecesInCart}></ItemsCounter>
            <StyledOpenCart ref={ref}>
              <div className="cart-text">Cart</div>
              <CartItems
                onDeleteItem={onDeleteItem}
                piecesInCart={piecesInCart}
              ></CartItems>
              <BtnCheckout></BtnCheckout>
            </StyledOpenCart>
          </StyledBlackCart>
        ) : (
          <StyledCart onClick={() => setModalOpen(true)} href="#">
            <ItemsCounter piecesInCart={piecesInCart}></ItemsCounter>
          </StyledCart>
        )}
      </>
    );
  }
}

export default Cart;
