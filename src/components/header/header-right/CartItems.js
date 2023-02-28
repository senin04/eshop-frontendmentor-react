import React from "react";
import CartItem from "./CartItem";

function CartItems({ piecesInCart, onDeleteItem }) {
  return (
    <ul>
      <CartItem
        onDeleteItem={onDeleteItem}
        piecesInCart={piecesInCart}
      ></CartItem>
    </ul>
  );
}

export default CartItems;
